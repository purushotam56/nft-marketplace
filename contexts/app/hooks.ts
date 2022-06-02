import { useCallback } from "react";

import { ApplicationModal, useAppState } from "./context";

export function useModalOpen(modal: ApplicationModal): boolean {
  const { openModal } = useAppState();
  return openModal === modal;
}

export function useToggleModal(modal: ApplicationModal): () => void {
  const open = useModalOpen(modal);
  const { setOpenModal } = useAppState();
  return useCallback(
    () => setOpenModal(open ? null : modal),
    [modal, open, setOpenModal],
  );
}

export function useWalletModalToggle(): () => void {
  return useToggleModal(ApplicationModal.WALLET);
}
