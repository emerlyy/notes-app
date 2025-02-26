"use client";

import ActionModal, {
  ActionModalContent,
} from "@/components/ui/ActionModal/ActionModal";
import { createContext, useContext, useRef, useState } from "react";

type ConfirmationModalContextProps = {
  showConfirmation: (content: ActionModalContent) => Promise<boolean>;
};

const ConfirmationModalContext =
  createContext<ConfirmationModalContextProps | null>(null);

type ConfirmationModalProviderProps = {
  children: React.ReactNode;
};

const useModal = () => {
  const [isOpened, setIsOpened] = useState(false);

  const openModal = () => {
    setIsOpened(true);
  };

  const closeModal = () => {
    setIsOpened(false);
  };

  return [isOpened, openModal, closeModal, setIsOpened] as const;
};

const ConfirmationModalProvider = ({
  children,
}: ConfirmationModalProviderProps) => {
  const [isModalOpened, openModal, closeModal] = useModal();
  const resolver =
    useRef<(value: boolean | PromiseLike<boolean>) => void>(null);
  const [modalContent, setModalContent] = useState<ActionModalContent | null>(
    null
  );

  const handleShow: ConfirmationModalContextProps["showConfirmation"] = (
    content
  ): Promise<boolean> => {
    setModalContent(content);
    openModal();
    return new Promise(function (resolve) {
      resolver.current = resolve;
    });
  };

  const handleOk = () => {
    if (resolver.current) {
      resolver.current(true);
    }
    closeModal();
  };

  const handleCancel = () => {
    if (resolver.current) {
      resolver.current(false);
    }
    closeModal();
  };

  const modalContext: ConfirmationModalContextProps = {
    showConfirmation: handleShow,
  };

  return (
    <ConfirmationModalContext.Provider value={modalContext}>
      {children}
      {modalContent && (
        <ActionModal
          isOpened={isModalOpened}
          handleOk={handleOk}
          handleCancel={handleCancel}
          {...modalContent}
        />
      )}
    </ConfirmationModalContext.Provider>
  );
};

export default ConfirmationModalProvider;

export const useConfirmationModalContext = () => {
  const context = useContext(ConfirmationModalContext);
  if (!context) throw new Error("Missing ModalContext.Provider in the tree");
  return context;
};
