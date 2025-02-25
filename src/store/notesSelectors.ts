import { Note } from "@/types";
import { normalizeString } from "@/utils/normalizeString";
import { NotesStore } from "./useNotes";

export const selectNotes = (state: NotesStore) => Object.values(state.notes);

type FilterAll = {
  type: "all";
  value: never;
};

type FilterArchived = {
  type: "archived";
  value: never;
};

type FilterTag = {
  type: "tag";
  value: string;
};

type FilterObj = FilterAll | FilterArchived | FilterTag;

type FilterString = "all" | "archived";

type Filter = FilterString | FilterObj;

export const selectFilteredNotes = (filter: Filter) => (state: NotesStore) => {
  const notes: Note[] = [];
  const archivedNotes: Note[] = [];

  Object.values(state.notes).forEach((item) =>
    item.isArchived ? archivedNotes.push(item) : notes.push(item)
  );

  if (!filter) return notes;

  let filterType: string;
  let filterValue: string;
  if (typeof filter === "string") {
    filterType = filter;
  } else {
    filterType = filter.type;
    filterValue = filter.value;
  }

  switch (filterType) {
    case "all":
      return notes;
    case "archived":
      return archivedNotes;
    case "tag":
      return notes.filter((item) =>
        item.tags?.map(normalizeString).includes(filterValue)
      );
  }

  return notes;
};
