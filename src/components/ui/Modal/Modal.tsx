"use client";

import { useKeyPress } from "@/hooks/useKeyPress";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import clsx from "clsx";
import React, { useRef } from "react";
import Overlay from "../Overlay/Overlay";

import "./Modal.css";

export type ModalProps = {
  isOpened: boolean;
  onClose: () => void;
  closeOnOutsideClick?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const Modal = ({
  isOpened,
  onClose,
  closeOnOutsideClick = true,
  className,
  children,
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, onClose, closeOnOutsideClick && isOpened);
  useKeyPress("Escape", onClose, isOpened);

  if (!isOpened) return null;

  return (
    <Overlay>
      <div className={clsx("modal", className)} ref={ref}>
        {children}
      </div>
    </Overlay>
  );
};

export default Modal;
