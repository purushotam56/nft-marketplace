type HeaderVariant = "normal-header" | "user-header";

interface Statistics {
  items?: string;
  owners?: string;
  floorPrice?: string;
  volumeTraded?: string;
}

interface Social {
  website?: string;
  discord?: string;
  medium?: string;
  telegram?: string;
  twitter?: string;
  instagram?: string;
}

export interface innerHeaderType {
  variant: HeaderVariant;
  title: string;
  logo?: string;
  backgroundImage?: string;
  created?: string;
  description?: string;
  isVerified?: boolean;
  statistics?: Statistics;
  social?: Social;
}
