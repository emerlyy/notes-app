"use client";

import { useSettings } from "@/context/SettingsContext";
import { SettingType } from "@/store/settingsStore";
import { useShallow } from "zustand/shallow";
import RadioGroup from "../ui/RadioGroup/RadioGroup";
import Text from "../ui/Text/Text";
import Title from "../ui/Title/Title";
import { SETTINGS_OPTIONS } from "./options";

import "./SettingsControls.css";

const titles: Record<SettingType, { title: string; subtitle: string }> = {
  "color-theme": {
    title: "Color Theme",
    subtitle: "Choose your color theme:",
  },
  "font-theme": { title: "Font Theme", subtitle: "Choose your font theme:" },
};

const SettingsControls = () => {
  const { active, color, font, setColor, setFont } = useSettings(
    useShallow((state) => ({
      active: state.active,
      color: state.color,
      font: state.font,
      setColor: state.setColor,
      setFont: state.setFont,
    }))
  );

  const settingsHandlers = {
    "color-theme": {
      onSubmit: setColor,
      value: color,
    },
    "font-theme": {
      onSubmit: setFont,
      value: font,
    },
  };

  console.log(settingsHandlers[active].value);

  return (
    <div className="settings-controls">
      <Title className="settings-controls__title" size="small" tag="h2">
        {titles[active].title}
      </Title>
      <Text tag="p" className="settings-controls__subtitle" size="regular">
        {titles[active].subtitle}
      </Text>
      <RadioGroup
        name={active}
        onChange={(value: string) => console.log("change", value)}
        // @ts-expect-error incompatible value prop if conditional handler
        onSubmit={settingsHandlers[active].onSubmit}
      >
        {SETTINGS_OPTIONS[active].map((item) => (
          <RadioGroup.Item
            key={item.value}
            {...item}
            defaultChecked={settingsHandlers[active].value === item.value}
          />
        ))}
        <RadioGroup.Button>Apply Changes</RadioGroup.Button>
      </RadioGroup>
    </div>
  );
};

export default SettingsControls;
