import { AbstractConnector } from "@web3-react/abstract-connector";

import { injected, walletconnect } from "@/connectors/index";

interface WalletInfo {
  connector?: AbstractConnector;
  name: string;
  iconURL?: string;
  href: string | null;
  primary?: true;
  mobile?: true;
  mobileOnly?: true;
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  METAMASK: {
    connector: injected,
    name: "Metamask",
    href: null,
  },
  WALLETCONNECT: {
    connector: walletconnect,
    name: "WalletConnect",
    href: null,
  },
};
