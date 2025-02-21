import SettingsControls from "@/components/SettingsControls/SettingsControls";
import SettingsList from "@/components/SettingsList/SettingsList";
import DashboardLayout from "@/components/ui/DashboardLayout/DashboardLayout";
import MainLayout from "../MainLayout";

export default function SettingsPage() {
  return (
    <MainLayout title="Settings">
      <DashboardLayout
        mainPanel="right"
        leftPanel={<SettingsList />}
        rightPanel={<SettingsControls />}
      />
    </MainLayout>
  );
}
