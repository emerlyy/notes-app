"use client";

import { useNotes } from "@/store/useNotes";
import { Note } from "@/types";
import { useShallow } from "zustand/shallow";
import NoteActions from "../NoteActions/NoteActions";
import NoteForm, { NoteFormSubmitHandler } from "../NoteForm/NoteForm";
import DashboardLayout from "../ui/DashboardLayout/DashboardLayout";
import { IconArchive, IconRestore } from "../ui/icons";
import { useNoteActions } from "./useNoteActions";
import { useNoteConfirmModals } from "./useNoteConfirmModals";

const emptyNote: Omit<Note, "id"> = {
  title: "",
  tags: null,
  content: "",
  isArchived: false,
  lastEdited: "",
};

const ActiveNoteDisplay = () => {
  const { activeNote, createNote, updateNote, createMode, setCreateMode } =
    useNotes(
      useShallow((state) => ({
        createMode: state.createMode,
        activeNote: state.activeNote ? state.notes[state.activeNote] : null,
        setCreateMode: state.setCreateMode,
        setActiveNote: state.setActiveNote,
        createNote: state.createNote,
        updateNote: state.updateNote,
      }))
    );

  const onSubmit: NoteFormSubmitHandler = (data) => {
    const formattedTags = Array.from(
      new Set(
        data.tags.match(/[^,\s][^\,]*[^,\s]*/gi)?.map((tag) => tag.trim())
      )
    );

    const noteData = {
      title: data.title,
      tags: formattedTags,
      content: data.content,
    };

    if (!createMode && activeNote) {
      updateNote(activeNote.id, { ...noteData });
      return;
    }

    createNote(noteData);
    setCreateMode(false);
  };

  const { deleteActive, toggleActiveArchive } = useNoteActions();
  const { confirmArchive, confirmDelete, confirmRestore } =
    useNoteConfirmModals();

  if (!createMode && !activeNote) {
    return <div></div>;
  }

  const { title, content, isArchived, lastEdited, tags } = createMode
    ? emptyNote
    : activeNote!;

  const onAction = async () => {
    const confirmed = await (isArchived ? confirmRestore : confirmArchive)();
    if (confirmed) {
      toggleActiveArchive();
    }
  };

  const onDelete = async () => {
    if (await confirmDelete()) {
      deleteActive();
    }
  };

  return (
    <DashboardLayout
      mainPanel="left"
      leftPanel={
        <NoteForm
          title={title}
          content={content}
          isArchived={isArchived}
          lastEdited={lastEdited}
          tags={tags}
          onSubmit={onSubmit}
        />
      }
      rightPanel={
        activeNote ? (
          <NoteActions
            actionIcon={
              activeNote.isArchived ? <IconRestore /> : <IconArchive />
            }
            actionLabel={`${
              activeNote.isArchived ? "Restore" : "Archive"
            } Note`}
            onAction={onAction}
            onDelete={onDelete}
          />
        ) : null
      }
    />
  );
};

export default ActiveNoteDisplay;
