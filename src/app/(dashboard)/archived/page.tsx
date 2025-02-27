"use client";

import ActiveNoteDisplay from "@/components/ActiveNoteDisplay/ActiveNoteDisplay";
import NotesList from "@/components/NotesList/NotesList";
import DashboardLayout from "@/components/ui/DashboardLayout/DashboardLayout";
import { selectFilteredNotes } from "@/store/notesSelectors";
import { useNotes } from "@/store/useNotes";
import { useShallow } from "zustand/shallow";

export default function NotePage() {
  const notes = useNotes(useShallow(selectFilteredNotes("archived")));

  return (
    <DashboardLayout
      leftPanel={
        <NotesList
          notes={notes}
          subtitle="All your archived notes are stored here. You can restore or delete them anytime."
        />
      }
      rightPanel={<ActiveNoteDisplay />}
    />
  );
}
