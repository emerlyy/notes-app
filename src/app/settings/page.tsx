import SettingsControls from "@/components/SettingsControls/SettingsControls";
import SettingsList from "@/components/SettingsList/SettingsList";
import DashboardLayout from "@/components/ui/DashboardLayout/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout
      mainPanel="right"
      leftPanel={<SettingsList />}
      rightPanel={<SettingsControls />}
    />
  );
}
