import DashboardLayout from "@/components/ui/DashboardLayout/DashboardLayout";
import MainLayout from "../MainLayout";

export default function SettingsPage() {
  return (
    <MainLayout title="Settings">
      <DashboardLayout
        mainPanel="right"
        leftPanel={<div>list</div>}
        rightPanel={<div>settings</div>}
      />
    </MainLayout>
  );
}
