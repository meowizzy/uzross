import { useState } from "react";

type UseModalReturnType<T = unknown> = {
  openModal: (props?: T) => void;
  closeModal: () => void;
  resetModal: () => void;
  updateModalProps: (props: T) => void;
  modalProps?: {
    visible: boolean;
  } & T;
};

export const useModal = <T>(initialModalProps?: T): UseModalReturnType<T> => {
  const [modalProps, setModalProps] = useState<
    UseModalReturnType<T>["modalProps"]
  >({
    visible: false,
    ...initialModalProps,
  });

  const openModal = (props = initialModalProps) => {
    setModalProps({
      visible: true,
      ...props,
    });
  };

  const closeModal = () => {
    setModalProps({
      ...modalProps,
      visible: false,
    });
  };

  const resetModal = () => {
    setModalProps({
      visible: false,
      ...initialModalProps,
    });
  };

  const updateModalProps = (props: T) => {
    setModalProps({
      ...modalProps,
      ...props,
    });
  };

  return {
    modalProps,
    openModal,
    closeModal,
    resetModal,
    updateModalProps,
  };
};
