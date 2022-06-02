import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";

import ItemDetail from "@/components/ItemDetails";
import { getAssetWithContract } from "@/services/assets";
import { AssetType } from "@/types/asset";

type Props = { data: AssetType };

const ItemPage: NextPage<Props> = ({ data }) => {
  return (
    <div>
      {" "}
      <ItemDetail asset={data} />{" "}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { contract, tokenid } = context.params;
  const res = await getAssetWithContract({
    contract: contract.toString(),
    id: tokenid.toString(),
  });
  return {
    props: {
      data: res,
    },
  };
};

export default ItemPage;
