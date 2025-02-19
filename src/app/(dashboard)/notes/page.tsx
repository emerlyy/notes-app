"use client";

import MainLayout from "@/app/MainLayout";
import NotesList from "@/components/NotesList/NotesList";
import DashboardLayout from "@/components/ui/DashboardLayout/DashboardLayout";
import { selectFilteredNotes } from "@/store/notesSelectors";
import { useNotes } from "@/store/useNotes";
import { useShallow } from "zustand/shallow";

export default function NotePage() {
  const notes = useNotes(useShallow(selectFilteredNotes("all")));

  return (
    <MainLayout title="All Notes">
      <DashboardLayout
        leftPanel={<NotesList notes={notes} />}
        rightPanel={<></>}
      />
    </MainLayout>
  );
}
