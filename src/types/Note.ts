export type Note = {
  id: string;
  title: string;
  tags: string[] | null;
  content: string;
  lastEdited: string;
  isArchived: boolean;
};
