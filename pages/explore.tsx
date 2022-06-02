import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";

import Explore from "@/components/Explore";
import Data from "@/constants/data";
import Layout from "@/layouts/Layout";
import { getAssets } from "@/services/assets";
import { AssetSortBy, GetAssets } from "@/types/asset";

type Props = {
  data: GetAssets;
  filtersText: string;
  sortBy: AssetSortBy;
};

const ExplorePage: NextPage<Props> = ({ data, filtersText, sortBy }) => {
  return (
    <Layout id="explore-page" title="Explore NFTs">
      <Explore
        assets={data.items}
        totalSize={data.total}
        filtersText={filtersText}
        sortBy={sortBy}
      />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { query } = context;
  const {
    page = 1,
    listType = "small",
    filters = "",
    sortBy = "price",
    search = "",
  } = query;
  const ITEMS_PER_PAGE =
    listType === "small" ? Data.CardLayout.SMALL : Data.CardLayout.LARGE;
  const res = await getAssets({
    page: +page,
    pageSize: ITEMS_PER_PAGE,
    sortBy: sortBy as AssetSortBy,
    q: search as string,
  });

  return {
    props: {
      data: res.data,
      filtersText: filters,
      sortBy,
    },
  };
};

export default ExplorePage;
