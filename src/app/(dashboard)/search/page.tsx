"use client";

import MainLayout from "@/app/MainLayout";
import ActiveNoteDisplay from "@/components/ActiveNoteDisplay/ActiveNoteDisplay";
import NotesList from "@/components/NotesList/NotesList";
import DashboardLayout from "@/components/ui/DashboardLayout/DashboardLayout";
import { selectFilteredNotes } from "@/store/notesSelectors";
import { useNotes } from "@/store/useNotes";
import { useSearchParams } from "next/navigation";
import { useShallow } from "zustand/shallow";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q") || "";

  const title = `Showing results for: ${search}`;

  const notes = useNotes(
    useShallow(selectFilteredNotes({ type: "search", value: search }))
  );

  return (
    <MainLayout title={title}>
      <DashboardLayout
        leftPanel={<NotesList notes={notes} />}
        rightPanel={<ActiveNoteDisplay />}
      />
    </MainLayout>
  );
}
