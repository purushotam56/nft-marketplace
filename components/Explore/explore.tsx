import React, { FC, useMemo } from "react";

import AppsIcon from "@mui/icons-material/Apps";
import { Stack, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { useRouter } from "next/router";

import { ExploreStyle } from "@/components/Explore/explore.styles";
import InnerHeader from "@/components/Innerheader";
import NftCards from "@/components/NftCards";
import NoLand from "@/components/NoLand";
import SideNavigation from "@/components/Sidenavigation";
import { StakingStyle } from "@/components/Staking/staking.styles";
import Button from "@/components/UI/Button";
import Chip from "@/components/UI/Chip";
import Pagination from "@/components/UI/Pagination";
import Select from "@/components/UI/Select";
import Data from "@/constants/data";
import useDidUpdateEffect from "@/hooks/useDidUpdateEffect";
import useReducer from "@/hooks/useReducer";
import { getAssets } from "@/services/assets";
import { AssetSortBy, AssetType } from "@/types/asset";
import { Filter, FiltersCB } from "@/types/filters";
import { decrypt, encrypt } from "@/utils/security";

type Props = {
  assets: AssetType[];
  totalSize: number;
  filtersText: string;
  sortBy: AssetSortBy;
};

type GET_DATA = {
  page?: number | undefined;
  currentListType?: "small" | "large" | undefined;
  currentSortBy?: AssetSortBy;
};

type State = {
  page: number;
  assets: AssetType[];
  totalSize: number;
  listType: "small" | "large";
  filters: Filter[];
  sortBy: AssetSortBy;
};

const Explore: FC<Props> = ({
  assets: cards,
  totalSize: cardsTotalSize,
  filtersText,
  sortBy: serverSortBy,
}) => {
  const history = useRouter();
  const [{ page, assets, totalSize, listType, filters, sortBy }, setState] =
    useReducer<State>({
      page: history.query.page ? +history.query.page : 1,
      assets: cards,
      totalSize: cardsTotalSize,
      listType: history.query.listType ?? "large",
      filters: decrypt(filtersText),
      sortBy: serverSortBy,
    });
  const isSmallListType = useMemo(() => listType === "small", [listType]);

  const getData = async ({
    page = 1,
    currentListType = listType,
    currentSortBy = sortBy,
  }: GET_DATA) => {
    const ITEMS_PER_PAGE =
      currentListType === "small"
        ? Data.CardLayout.SMALL
        : Data.CardLayout.LARGE;
    const res = await getAssets({
      page,
      pageSize: ITEMS_PER_PAGE,
      sortBy: currentSortBy,
      filters: filters.map((cur) => cur.id).join(","),
      q: (history.query.search as string) ?? "",
    });

    setState({
      assets: res.data.items,
      totalSize: res.data.total,
      page,
      listType: currentListType,
      sortBy: currentSortBy,
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
      await getData({});
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

  const handleSortBy = async (e) => {
    const value = e.target.value;

    await history.replace(
      {
        query: { ...history.query, sortBy: value },
      },
      undefined,
      { scroll: false },
    );
    await getData({ currentSortBy: value });
  };

  const onPageChange = async (_, page) => {
    await history.replace({ query: { ...history.query, page } });
    await getData({ page });
  };

  const onItemDetail = (contract: string, tokenId: string) =>
    history.push(`/assets/${contract}/${tokenId}`);

  return (
    <Box sx={{ backgroundColor: "#E4E1EB" }}>
      <InnerHeader variant="normal-header" title="Explore NFTs" />
      <Box sx={StakingStyle.wrapper} className="d-flex justify-content-between">
        <SideNavigation filters={filters} setFilters={setFilters} />
        {assets.length ? (
          <Box sx={StakingStyle.contentArea}>
            <Box
              sx={StakingStyle.subHeader}
              className="d-flex justify-content-between align-items-center"
            >
              <Typography sx={StakingStyle.title_h2} className="font-teko">
                {totalSize} items
              </Typography>
              <Box
                component={"div"}
                sx={StakingStyle.filterIconHolder}
                className="d-flex  align-items-center"
              >
                <Box sx={ExploreStyle.sortby}>
                  <small className="font-play">SORT BY</small>
                  <Select
                    value={sortBy}
                    onChange={handleSortBy}
                    options={[
                      {
                        label: "Price",
                        value: "price",
                      },
                      {
                        label: "Created At",
                        value: "date",
                      },
                    ]}
                  />
                </Box>
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
                {assets.map(({ id, collection, property, tokenId }) => (
                  <Grid key={id} item xs={12} md={6} lg={3} xl={3}>
                    <NftCards
                      variant="normal_card"
                      id={id}
                      property={property}
                      ethPrice="11.4"
                      nftPrice="$810,390.00"
                      onDetail={() =>
                        onItemDetail(
                          collection.contractAddress,
                          tokenId.toString(),
                        )
                      }
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
    </Box>
  );
};

export default Explore;
