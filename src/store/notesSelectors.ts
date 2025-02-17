import { Note } from "@/types";
import { normalizeString } from "@/utils/normalizeString";
import { NotesStore } from "./useNotes";

export const selectNotes = (state: NotesStore) => Object.values(state.notes);

export const selectFilteredNotes = (filter?: string) => (state: NotesStore) => {
  const notes: Note[] = [];
  const archivedNotes: Note[] = [];

  Object.values(state.notes).forEach((item) =>
    item.isArchived ? archivedNotes.push(item) : notes.push(item)
  );

  if (!filter) return notes;

  switch (filter) {
    case "all":
      return notes;
    case "archived":
      return archivedNotes;
  }

  return notes.filter((item) =>
    item.tags?.map(normalizeString).includes(filter)
  );
};
