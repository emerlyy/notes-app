import clsx from "clsx";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import "./Overlay.css";

type Props = {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
};

const Overlay = ({ onClick, className, children }: Props) => {
  useEffect(() => {
    document.body.classList.add("noscroll");

    return () => {
      document.body.classList.remove("noscroll");
    };
  }, []);

  return (
    <>
      {createPortal(
        <div className={clsx("overlay", className)} onClick={onClick}>
          {children}
        </div>,
        document.body
      )}
    </>
  );
};

export default Overlay;
