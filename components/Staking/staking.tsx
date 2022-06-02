import React, { FC, useState, useMemo } from "react";

import AppsIcon from "@mui/icons-material/Apps";
import { Stack, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { useRouter } from "next/router";

import TransactionDialog from "@/components/Dialogs/TransactionDialog";
import InnerHeader from "@/components/Innerheader";
import NftCards from "@/components/NftCards";
import NoLand from "@/components/NoLand";
import SideNavigation from "@/components/Sidenavigation";
import { StakingStyle } from "@/components/Staking/staking.styles";
import Button from "@/components/UI/Button";
import Chip from "@/components/UI/Chip";
import Pagination from "@/components/UI/Pagination";
import Data from "@/constants/data";
import useActiveWeb3React from "@/hooks/useActiveWeb3React";
import { useNftContract, useStakingContract } from "@/hooks/useContract";
// import useGetLands from "@/hooks/useGetLands";
import useDidUpdateEffect from "@/hooks/useDidUpdateEffect";
import useReducer from "@/hooks/useReducer";
import { getAssets } from "@/services/assets";
import { AssetType } from "@/types/asset";
import { Filter, FiltersCB } from "@/types/filters";
import { TxStatus } from "@/types/types";
import { getStakingAddress } from "@/utils/addressHelpers";
import { calculateGasMargin } from "@/utils/calculateGasMargin";
import { encrypt, decrypt } from "@/utils/security";

type Props = {
  assets: AssetType[];
  totalSize: number;
  filtersText: string;
};

type GET_DATA = {
  page?: number | undefined;
  currentListType?: "small" | "large" | undefined;
};

type State = {
  page: number;
  assets: AssetType[];
  totalSize: number;
  listType: "small" | "large";
  filters: Filter[];
};

const Staking: FC<Props> = ({
  assets: cards,
  totalSize: cardsTotalSize,
  filtersText,
}) => {
  const { account } = useActiveWeb3React();
  // const { assets, update } = useGetLands();
  const stakingContract = useStakingContract();
  const nftContract = useNftContract();

  const history = useRouter();
  const [{ page, assets, totalSize, listType, filters }, setState] =
    useReducer<State>({
      page: history.query.page ? +history.query.page : 1,
      assets: cards,
      totalSize: cardsTotalSize,
      listType: history.query.listType ?? "large",
      filters: decrypt(filtersText),
    });
  const [openTxModal, setOpenTxModal] = useState<boolean>(false);
  const [txStatus, setTxStatus] = useState<TxStatus>();
  const [txHash, setTxHash] = useState<string>();
  const isSmallListType = useMemo(() => listType === "small", [listType]);

  const getData = async ({
    page = 1,
    currentListType = listType,
  }: GET_DATA) => {
    const ITEMS_PER_PAGE =
      currentListType === "small"
        ? Data.CardLayout.SMALL
        : Data.CardLayout.LARGE;
    const res = await getAssets({
      page,
      pageSize: ITEMS_PER_PAGE,
      filters: filters.map((cur) => cur.id).join(","),
      q: (history.query.search as string) ?? "",
    });

    setState({
      assets: res.data.items,
      totalSize: res.data.total,
      page,
      listType: currentListType,
    });
  };

  useDidUpdateEffect(() => {
    (async () => {
      await getData({});
    })();
  }, [history.query.search]);

  useDidUpdateEffect(() => {
    (async () => {
      const text = encrypt(filters);
      await history.replace(
        { query: { ...history.query, filters: text } },
        undefined,
        { scroll: false },
      );
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const generateChips = () => {
    return filters.map((cur) => ({ id: cur.id, title: cur.label }));
  };

  const setFilters = (cb: FiltersCB) => {
    setState((prev) => ({ filters: cb(prev.filters) }));
  };

  const onDelete = (id: string) => () => {
    setState((prev) => ({
      filters: prev.filters.filter((cur) => cur.id !== id),
    }));
  };

  const resetFilters = () => setState({ filters: [] });

  const handleGrid = async (value: "small" | "large") => {
    await history.replace(
      {
        query: { ...history.query, page: 1, listType: value },
      },
      undefined,
      { scroll: false },
    );
    await getData({ page: 1, currentListType: value });
  };

  const onPageChange = async (_, page) => {
    await history.replace({ query: { ...history.query, page } });
    await getData({ page });
  };

  const onStake = async (id: number) => {
    try {
      setOpenTxModal(true);
      setTxStatus("progress");

      const isApproved = await nftContract.getApproved(id);

      if (isApproved) {
        nftContract
          .approve(getStakingAddress(), id)
          .then((tx) => {
            tx.wait().then(async () => {
              await handleStake(id);
            });
          })
          .catch(() => {
            setTxStatus("failed");
          });
      } else {
        await handleStake(id);
      }
    } catch (e) {
      setTxStatus("failed");
    }
  };

  const handleStake = async (id: number) => {
    const rentableUntil = Math.floor(Date.now() / 1000) + 86400 * 2;

    const estimateGas = await stakingContract.estimateGas.stake(
      [id],
      account,
      0,
      0,
      0,
      rentableUntil,
      false,
    );

    stakingContract
      .stake([id], account, 0, 0, 0, rentableUntil, false, {
        gasLimit: calculateGasMargin(estimateGas),
      })
      .then((transaction) => {
        setTxHash(transaction.hash);
        transaction.wait().then(() => {
          setTxStatus("success");
          // update(id, { status: "active" });
        });
      })
      .catch(() => {
        setTxStatus("failed");
      });
  };

  const onUnstake = async (id: number) => {
    try {
      setOpenTxModal(true);
      setTxStatus("progress");
      const estimateGas = await stakingContract.estimateGas.unstake(
        [id],
        account,
      );
      stakingContract
        .unstake([id], account, {
          gasLimit: calculateGasMargin(estimateGas),
        })
        .then((transaction) => {
          setTxHash(transaction.hash);

          transaction.wait().then(() => {
            setTxStatus("success");
            // update(id, { status: "none" });
          });
        })
        .catch(() => {
          setTxStatus("failed");
        });
    } catch (e) {
      setTxStatus("failed");
    }
  };

  const onItemDetail = (contract: string, tokenId: string) =>
    history.push(`/assets/${contract}/${tokenId}`);

  return (
    <Box sx={{ backgroundColor: "#E4E1EB" }}>
      <InnerHeader variant="normal-header" title="My Lands" />
      <Box
        sx={StakingStyle.wrapper}
        display="flex"
        justifyContent="space-between"
      >
        <SideNavigation filters={filters} setFilters={setFilters} />
        {assets.length ? (
          <Box sx={StakingStyle.contentArea}>
            <Box
              sx={StakingStyle.subHeader}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography sx={StakingStyle.title_h2} className="font-teko">
                {totalSize} items
              </Typography>
              <Box
                component={"div"}
                sx={StakingStyle.filterIconHolder}
                className="d-flex  align-items-center"
              >
                <Button
                  variant="outlined"
                  sx={StakingStyle.listView}
                  className={!isSmallListType ? "selected" : null}
                  onClick={() => handleGrid("large")}
                  startIcon={
                    <svg viewBox="0 0 25 25" height="25" width="25">
                      <rect width="11" height="11" />
                      <rect x="14" width="11" height="11" />
                      <rect y="14" width="11" height="11" />
                      <rect x="14" y="14" width="11" height="11" />
                    </svg>
                  }
                />
                <Button
                  variant="outlined"
                  sx={StakingStyle.tileView}
                  className={isSmallListType ? "selected" : null}
                  onClick={() => handleGrid("small")}
                  startIcon={<AppsIcon sx={{ fontSize: "35px" }} />}
                />
              </Box>
            </Box>
            <Box className="d-flex justify-content-between align-items-center">
              <Typography sx={StakingStyle.filter_title} className="font-play">
                Filters ({filters.length})
              </Typography>
              {!!filters.length && (
                <Button
                  className="font-play clearfilter-btn mobileClearFilter-btn"
                  title="CLEAR FILTERS"
                  icon="/images/turn-back.svg"
                  iconSize={13}
                  sx={StakingStyle.clearFilter_btn}
                  onClick={resetFilters}
                />
              )}
            </Box>
            <Box sx={StakingStyle.chipHolder}>
              {generateChips().map(({ id, title }) => (
                <Chip key={id} label={title} onDelete={onDelete(id)} />
              ))}
              {!!filters.length && (
                <Button
                  className="font-play clearfilter-btn"
                  title="CLEAR FILTERS"
                  icon="/images/turn-back.svg"
                  iconSize={13}
                  sx={StakingStyle.clearFilter_btn}
                  onClick={resetFilters}
                />
              )}
            </Box>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              component={"div"}
              sx={StakingStyle.cardHolder}
            >
              <Grid
                container
                columnSpacing={{ sm: isSmallListType ? 2 : 3 }}
                className={isSmallListType ? "listview" : "tileview"}
              >
                {assets
                  .sort((a, b) => (a.id > b.id ? 1 : -1))
                  .map(({ id, collection, property, status, tokenId }) => (
                    <Grid key={id} item xs={12} md={6} lg={3} xl={3}>
                      <NftCards
                        variant="button_card"
                        id={id}
                        property={property}
                        status={status}
                        onDetail={() =>
                          onItemDetail(
                            collection.contractAddress,
                            tokenId.toString(),
                          )
                        }
                        onStake={() => onStake(id)}
                        onUnstake={() => onUnstake(id)}
                      />
                    </Grid>
                  ))}
              </Grid>
            </Stack>

            <Container>
              <Pagination
                limit={
                  listType === "small"
                    ? Data.CardLayout.SMALL
                    : Data.CardLayout.LARGE
                }
                page={page}
                totalSize={totalSize}
                onChange={onPageChange}
              />
            </Container>
          </Box>
        ) : (
          <Box sx={StakingStyle.contentArea}>
            <NoLand />
          </Box>
        )}
      </Box>

      {openTxModal && (
        <TransactionDialog
          open={openTxModal}
          onClose={() => setOpenTxModal(false)}
          status={txStatus}
          hash={txHash}
        />
      )}
    </Box>
  );
};

export default Staking;
