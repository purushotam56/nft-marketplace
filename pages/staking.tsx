import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";

import Staking from "@/components/Staking";
import Data from "@/constants/data";
import Layout from "@/layouts/Layout";
import { getAssets } from "@/services/assets";
import { GetAssets } from "@/types/asset";

type Props = {
  data: GetAssets;
  filtersText: string;
};

const StakingPage: NextPage<Props> = ({ data, filtersText }) => {
  return (
    <Layout id="staking-page" title="Staking">
      <Staking
        assets={data.items}
        totalSize={data.total}
        filtersText={filtersText}
      />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { query } = context;
  const { page = 1, listType = "small", filters = "", search = "" } = query;
  const ITEMS_PER_PAGE =
    listType === "small" ? Data.CardLayout.SMALL : Data.CardLayout.LARGE;
  const res = await getAssets({
    page: +page,
    pageSize: ITEMS_PER_PAGE,
    q: search as string,
  });

  return {
    props: {
      data: res.data,
      filtersText: filters,
    },
  };
};

export default StakingPage;
