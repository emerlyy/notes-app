import NotesList from "@/components/NotesList/NotesList";
import DashboardLayout from "@/components/ui/DashboardLayout/DashboardLayout";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <DashboardLayout leftPanel={<NotesList notes={[]} />} rightPanel={<></>} />
  );
}
