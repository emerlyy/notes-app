"use client";

import { SettingType, useSettings } from "@/store/useSettings";
import { useShallow } from "zustand/shallow";
import List from "../ui/List/List";
import ListCard from "../ui/ListCard/ListCard";
import { IconFont, IconSun } from "../ui/icons";

import "./SettingsList.css";

const settings: { id: SettingType; label: string; icon?: React.ReactNode }[] = [
  {
    id: "color-theme",
    label: "Color Theme",
    icon: <IconSun width={20} height={20} />,
  },
  {
    id: "font-theme",
    label: "Font Theme",
    icon: <IconFont width={20} height={20} />,
  },
];

const SettingsList = () => {
  const { active, setActive } = useSettings(
    useShallow((state) => ({
      active: state.active,
      setActive: state.setActive,
    }))
  );

  return (
    <List tag="ul" className="settings__settings-list" direction="column">
      {settings.map((item) => (
        <li key={item.id}>
          <ListCard.Button
            icon={item.icon}
            text={item.label}
            onClick={() => setActive(item.id)}
            isActive={item.id === active}
          />
        </li>
      ))}
    </List>
  );
};

export default SettingsList;
