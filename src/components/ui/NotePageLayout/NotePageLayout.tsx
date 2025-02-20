import React from "react";

import "./NotePageLayout.css";

type Props = {
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
};

const NotePageLayout = ({ header, body, footer }: Props) => {
  return (
    <div className="note-page">
      <div className="note-page__header">{header}</div>
      <div className="note-page__body">{body}</div>
      <div className="note-page__footer">{footer}</div>
    </div>
  );
};

export default NotePageLayout;
