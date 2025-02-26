"use client";

import { useConfirmationModalContext } from "@/context/ConfirmationModalContext";
import { IconArchive, IconDelete, IconRestore } from "../ui/icons";

export const useNoteConfirmModals = () => {
  const { showConfirmation } = useConfirmationModalContext();

  const confirmArchive = () =>
    showConfirmation({
      icon: <IconArchive width={24} height={24} />,
      title: "Archive Note",
      message:
        "Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime.",
      actionButtonLabel: "Archive Note",
      actionButtonColor: "primary",
    });

  const confirmRestore = () =>
    showConfirmation({
      icon: <IconRestore width={24} height={24} />,
      title: "Restore Note",
      message:
        "Are you sure you want to restore this note? You can find it in the All Notes section and archive it anytime.",
      actionButtonLabel: "Restore Note",
      actionButtonColor: "primary",
    });

  const confirmDelete = () =>
    showConfirmation({
      icon: <IconDelete width={24} height={24} />,
      title: "Delete Note",
      message:
        "Are you sure you want to permanently delete this note? This action cannot be undone.",
      actionButtonLabel: "Delete Note",
      actionButtonColor: "warning",
    });

  return { confirmArchive, confirmRestore, confirmDelete };
};
