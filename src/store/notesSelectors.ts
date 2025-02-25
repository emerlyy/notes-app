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

type FilterSearch = {
  type: "search";
  value: string;
};

type FilterObj = FilterAll | FilterArchived | FilterTag | FilterSearch;

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
    case "search":
      return notes.filter(
        (item) =>
          item.title.toLowerCase().includes(filterValue) ||
          item.tags?.some((tag) => tag.toLowerCase().includes(filterValue))
      );
  }

  return notes;
};
