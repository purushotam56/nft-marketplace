import React, { FC, ReactChild, useState, useMemo } from "react";

import AppsIcon from "@mui/icons-material/Apps";
import { Stack, Typography, Container, Box, Tabs, Tab } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";

import ActivityPanel from "@/components/Collections/activity";
import { CollectionStyle } from "@/components/Collections/collections.styles";
import InnerHeader from "@/components/Innerheader";
import NftCards from "@/components/NftCards";
import NoLand from "@/components/NoLand";
import SideNavigation from "@/components/Sidenavigation";
import Button from "@/components/UI/Button";
import Chip from "@/components/UI/Chip";
import Pagination from "@/components/UI/Pagination";
import Data from "@/constants/data";
import useDidUpdateEffect from "@/hooks/useDidUpdateEffect";
import useReducer from "@/hooks/useReducer";
import { getAssets } from "@/services/assets";
import { AssetType } from "@/types/asset";
import { Filter, FiltersCB } from "@/types/filters";
import { encrypt, decrypt } from "@/utils/security";

type Props = {
  assets: AssetType[];
  totalSize: number;
  filtersText: string;
};

type TabPanelProps = {
  children: ReactChild | ReactChild[];
  value: number;
  index: number;
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

const TabPanel: FC<TabPanelProps> = (props) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`collection-tab-${index}`}
    >
      {value === index && children}
    </div>
  );
};

const Collections: FC<Props> = ({
  assets: cards,
  totalSize: cardsTotalSize,
  filtersText,
}) => {
  const history = useRouter();
  const [{ page, assets, totalSize, listType, filters }, setState] =
    useReducer<State>({
      page: history.query.page ? +history.query.page : 1,
      assets: cards,
      totalSize: cardsTotalSize,
      listType: history.query.listType ?? "large",
      filters: decrypt(filtersText),
    });
  const [tab, setTab] = useState(0);
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

  const onPageChange = async (_, page) => {
    await history.replace({ query: { ...history.query, page } });
    await getData({ page });
  };

  const onItemDetail = (contract: string, tokenId: string) =>
    history.push(`/assets/${contract}/${tokenId}`);

  return (
    <Box sx={{ backgroundColor: "#E4E1EB" }}>
      <InnerHeader
        variant="user-header"
        logo="/images/netvrk_icon.svg"
        backgroundImage="/images/collection-header.png"
        title="Network Land"
        created="Netvrk-Deployer"
        isVerified={true}
        description="Netvrk is a metaverse built on the blockchain that allows users to monetize their creations via NFTs and Virtual Land."
        statistics={{
          items: "10.0K",
          owners: "3.9K",
          floorPrice: "$3.9K",
          volumeTraded: "$4.4K",
        }}
        social={{
          twitter: "twitter",
          discord: "discord",
          medium: "medium",
          telegram: "telegram",
          website: "website",
          instagram: "instagram",
        }}
      />
      <Box
        sx={CollectionStyle.wrapper}
        display="flex"
        justifyContent="space-between"
      >
        <SideNavigation filters={filters} setFilters={setFilters} />
        {assets.length ? (
          <Box sx={CollectionStyle.contentArea}>
            <Tabs
              sx={CollectionStyle.contentTabs}
              value={tab}
              onChange={(_, value) => setTab(value)}
            >
              <Tab label="Collected" />
              <Tab label="Activity" />
            </Tabs>
            <TabPanel value={tab} index={0}>
              <Box
                sx={CollectionStyle.subHeader}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography sx={CollectionStyle.title_h2} className="font-teko">
                  {totalSize} items
                </Typography>
                <Box
                  component={"div"}
                  sx={CollectionStyle.filterIconHolder}
                  className="d-flex  align-items-center"
                >
                  <Button
                    variant="outlined"
                    sx={CollectionStyle.listView}
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
                    sx={CollectionStyle.tileView}
                    className={isSmallListType ? "selected" : null}
                    onClick={() => handleGrid("small")}
                    startIcon={<AppsIcon sx={{ fontSize: "35px" }} />}
                  />
                </Box>
              </Box>
              <Typography
                sx={CollectionStyle.filter_title}
                className="font-play"
              >
                Filters ({filters.length})
              </Typography>

              <Box sx={CollectionStyle.chipHolder}>
                {generateChips().map(({ id, title }) => (
                  <Chip key={id} label={title} onDelete={onDelete(id)} />
                ))}
                {!!filters.length && (
                  <Button
                    className="font-play clearfilter-btn"
                    title="CLEAR FILTERS"
                    icon="/images/turn-back.svg"
                    iconSize={13}
                    sx={CollectionStyle.clearFilter_btn}
                    onClick={resetFilters}
                  />
                )}
              </Box>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                component={"div"}
                sx={CollectionStyle.cardHolder}
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
            </TabPanel>
            <TabPanel value={tab} index={1}>
              <Box
                sx={CollectionStyle.subHeader}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography sx={CollectionStyle.title_h2} className="font-teko">
                  {totalSize} items
                </Typography>
              </Box>
              <Typography
                sx={CollectionStyle.filter_title}
                className="font-play"
              >
                Filters ({filters.length})
              </Typography>
              <Box sx={CollectionStyle.chipHolder}>
                {generateChips().map(({ id, title }) => (
                  <Chip key={id} label={title} onDelete={onDelete(id)} />
                ))}
                {!!filters.length && (
                  <Button
                    className="font-play clearfilter-btn"
                    title="CLEAR FILTERS"
                    icon="/images/turn-back.svg"
                    iconSize={13}
                    sx={CollectionStyle.clearFilter_btn}
                    onClick={resetFilters}
                  />
                )}
              </Box>
              <ActivityPanel />
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
            </TabPanel>
          </Box>
        ) : (
          <Box sx={CollectionStyle.contentArea}>
            <NoLand />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Collections;
