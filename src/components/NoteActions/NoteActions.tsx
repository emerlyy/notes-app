"use client";

import React, { SVGProps } from "react";
import Button from "../ui/Button/Button";
import { IconDelete } from "../ui/icons";
import "./NoteActions.css";

type Props = {
  actionIcon: React.ReactElement<SVGProps<SVGSVGElement>>;
  actionLabel: string;
  onAction: React.MouseEventHandler<HTMLButtonElement>;
  onDelete: React.MouseEventHandler<HTMLButtonElement>;
};

const NoteActions = ({
  actionIcon,
  actionLabel,
  onAction,
  onDelete,
}: Props) => {
  return (
    <div className="note-actions">
      <Button
        className="note-actions__button"
        variant="outlined"
        onClick={onAction}
      >
        {React.cloneElement(actionIcon, { width: 20, height: 20 })}
        {actionLabel}
      </Button>
      <Button
        className="note-actions__button"
        variant="outlined"
        onClick={onDelete}
      >
        <IconDelete width={20} height={20} /> Delete Note
      </Button>
    </div>
  );
};

export default NoteActions;
