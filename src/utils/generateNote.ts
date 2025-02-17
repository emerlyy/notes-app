import { Note } from "@/types";
import { nanoid } from "nanoid";

export const generateNote = (
  noteInfo: Pick<Note, "title" | "content" | "tags">
) => {
  const id = nanoid();
  const note = {
    id,
    isArchived: false,
    lastEdited: new Date().toISOString(),
    title: noteInfo.title,
    tags: !!noteInfo.tags?.length ? noteInfo.tags : null,
    content: noteInfo.content,
  };
  return {
    id,
    note,
  };
};
