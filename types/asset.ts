import { AxiosResponse } from "@/api/axios";

export interface AssetPropertyType {
  assetId?: number;
  coverUrl: string;
  description: string;
  id: number;
  metadataUrl: string;
  name: string;
}

export type AssetStatus = "active" | "inactive" | "none";

export interface AssetType {
  id: number;
  contractAddress: string;
  tokenId: string | number;
  ownerAddress: string;
  ownerId: string;
  type: string;
  property: AssetPropertyType;
  status?: AssetStatus;
  land?: LandData;
  avatar?: AvatarData;
  transport?: TransportData;
  bonus?: BonusData;
  collection?: Collection;
}

export type AssetSortBy = "price" | "date";

export type GetAssets = {
  total: number;
  items: AssetType[];
};

export type GetAssetsReq = {
  page: number;
  pageSize: number;
  sortBy?: AssetSortBy;
  filters?: string;
  q?: string;
};

export interface GetAssetsRes extends AxiosResponse {
  data: GetAssets;
}

export interface AssetMetaData {
  name: string;
  image: string;
  description: string;
  size: string;
  type: string;
  district: string;
  x: number;
  y: number;
}

export type LandData = {
  assetId: number;
  coverUrl: string;
  description: string;
  details: string;
  district: string;
  group1: string;
  group2: string;
  height: number;
  id: number;
  name: string;
  width: number;
  x: number;
  y: number;
  group: string;
  type: string;
};

export type AvatarData = {
  companion: string;
  coverUrl: string;
  description: string;
  edition: string;
  id: number;
  name: string;
  type: string;
};

export type BonusData = {
  assetId: number;
  coverUrl: string;
  description: string;
  id: number;
  name: string;
  type: string;
};

export type TransportData = {
  assetId: number;
  coverUrl: string;
  description: string;
  id: number;
  name: string;
  type: string;
};

export type Collection = {
  contractAddress: string;
  id: number;
};
