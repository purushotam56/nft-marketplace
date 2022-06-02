import axios from "@/api/axios";
import type { AssetType, GetAssetsReq, GetAssetsRes } from "@/types/asset";
import { MetadataType } from "@/types/stake";

export const getAssets = async (
  params: GetAssetsReq,
): Promise<GetAssetsRes> => {
  return axios.get("/assets", { params });
};

export const getAsset = async ({ id }: { id: number }): Promise<AssetType> => {
  const response = await axios.get(`/assets/detail/${id}`);
  return response.data;
};

export const getAssetMetadata = async ({
  id,
}: {
  id: string;
}): Promise<MetadataType> => {
  const response = await axios.get(`https://api.netvrk.co/api/items/${id}`);
  return response.data;
};

export const getAssetWithContract = async ({
  contract,
  id,
}: {
  contract: string;
  id: string;
}): Promise<AssetType> => {
  const response = await axios.get(`/assets/${contract}/${id}`);
  return response.data;
};
