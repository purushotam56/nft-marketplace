import { createContext, ReactNode, useContext, useState } from "react";

export enum ApplicationModal {
  WALLET,
  NETWORK_SELECTOR,
}

export type AppContextType = {
  chainId: number | null;
  setChainId(
    chainId: number | null | ((prev: number | null) => number | null),
  ): void;

  openModal: ApplicationModal | null;
  setOpenModal(
    openModal:
      | ApplicationModal
      | null
      | ((prev: ApplicationModal | null) => ApplicationModal | null),
  ): void;
};

const AppStateContext = createContext<AppContextType>(null);

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within the AppStateProvider");
  }
  return context;
}

type Props = {
  children: ReactNode;
};

export function AppStateProvider({ children }: Props) {
  const [chainId, setChainId] = useState(null);
  const [openModal, setOpenModal] = useState(null);

  const contextValue = {
    chainId,
    setChainId,
    openModal,
    setOpenModal,
  };
  return (
    <>
      <AppStateContext.Provider value={contextValue}>
        {children}
      </AppStateContext.Provider>
    </>
  );
}
