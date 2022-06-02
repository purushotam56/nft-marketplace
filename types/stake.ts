export type ActionStatus = "active" | "inactive";

export type MetdataAttributeType = {
  trait_type: string;
  value: string;
};

export type MetadataType = {
  name: string;
  description: string;
  image: string;
  attributes: MetdataAttributeType[];
};

export type StakedItem = {
  id: string;
  tokenId: string;
  user: string;
  status: ActionStatus;
};

export type RentedItem = {
  id: string;
  tokenId: string;
  tenant: string;
  status: ActionStatus;
};

export type MintedItem = {
  to: string;
  id: string;
  tokenId: string;
};

export type BurnedItem = {
  from: string;
  id: string;
  tokenId: string;
};
