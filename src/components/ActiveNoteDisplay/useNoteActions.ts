import { useNotes } from "@/store/useNotes";
import { useShallow } from "zustand/shallow";

export const useNoteActions = () => {
  const { activeNote, removeNote, updateNote } = useNotes(
    useShallow((state) => ({
      activeNote: state.activeNote ? state.notes[state.activeNote] : null,
      removeNote: state.removeNote,
      updateNote: state.updateNote,
    }))
  );

  const toggleActiveArchive = () => {
    if (!activeNote) return;
    updateNote(activeNote.id, { isArchived: !activeNote.isArchived }, false);
  };

  const deleteActive = () => {
    if (!activeNote) return;
    removeNote(activeNote.id);
  };

  return {
    toggleActiveArchive,
    deleteActive,
  } as const;
};
