"use client";

import ActiveNoteDisplay from "@/components/ActiveNoteDisplay/ActiveNoteDisplay";
import NotesList from "@/components/NotesList/NotesList";
import DashboardLayout from "@/components/ui/DashboardLayout/DashboardLayout";
import { selectFilteredNotes } from "@/store/notesSelectors";
import { useNotes } from "@/store/useNotes";
import { useParams } from "next/navigation";
import { useShallow } from "zustand/shallow";

type Params = {
  tagName: string;
};

export default function TagPage() {
  const params = useParams<Params>();

  const filter = params.tagName;
  const tagName = decodeURI(filter);

  const subtitle = `All notes with the "${tagName}" tag are shown here.`;

  const notes = useNotes(
    useShallow(selectFilteredNotes({ type: "tag", value: filter }))
  );

  return (
    <DashboardLayout
      leftPanel={<NotesList notes={notes} subtitle={subtitle} />}
      rightPanel={<ActiveNoteDisplay />}
    />
  );
}
