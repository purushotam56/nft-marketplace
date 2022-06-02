import React from "react";

import { AssetPropertyType, AssetStatus } from "@/types/asset";

type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

type CardVariant = "normal_card" | "button_card" | "ethereum_card";

export interface NftCardsType {
  id: number;
  variant: CardVariant;
  property: AssetPropertyType;
  ethPrice?: string;
  nftPrice?: string;
  isSmallListType?: boolean;
  status?: AssetStatus;
  onDetail?: () => void;
  onStake?: () => void;
  onUnstake?: () => void;
  onListForRent?: ((e: ClickEvent) => Promise<void>) | null;
}
