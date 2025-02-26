import Button, { ButtonProps } from "../Button/Button";
import Modal, { ModalProps } from "../Modal/Modal";
import Text from "../Text/Text";
import Title from "../Title/Title";

import "./ActionModal.css";

export type ActionModalContent = {
  icon?: React.ReactNode;
  title: string;
  message: string;
  actionButtonLabel: string;
  actionButtonColor: ButtonProps["color"];
};

export type ActionModalProps = {
  handleOk: () => void;
  handleCancel: () => void;
} & ActionModalContent &
  Pick<ModalProps, "isOpened">;

const ActionModal = ({
  handleOk,
  handleCancel,
  isOpened,
  icon,
  title,
  message,
  actionButtonLabel,
  actionButtonColor,
}: ActionModalProps) => {
  return (
    <Modal isOpened={isOpened} onClose={handleCancel}>
      <div className="action-modal__body">
        {icon && <div className="action-modal__icon-container">{icon}</div>}
        <div className="action-modal__content">
          <Title
            tag="p"
            size="small"
            color="text-primary"
            weight="semibold"
            className="action-modal__title"
          >
            {title}
          </Title>
          <Text tag="p" size="regular" color="text-primary">
            {message}
          </Text>
        </div>
      </div>
      <div className="action-modal__actions">
        <Button color="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button color={actionButtonColor} onClick={handleOk}>
          {actionButtonLabel}
        </Button>
      </div>
    </Modal>
  );
};

export default ActionModal;
