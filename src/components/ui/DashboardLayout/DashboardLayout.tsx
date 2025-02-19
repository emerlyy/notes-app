import clsx from "clsx";
import React from "react";
import "./DashboardLayout.css";

type Props = {
  mainPanel?: "left" | "right";
  leftPanel: React.ReactNode;
  rightPanel: React.ReactNode;
};

const DashboardLayout = ({
  mainPanel = "right",
  leftPanel,
  rightPanel,
}: Props) => {
  return (
    <div className={clsx("dashboard", `dashboard_${mainPanel}`)}>
      <div
        className={clsx("left-panel-wrapper", {
          scrollable: mainPanel !== "left",
        })}
      >
        {leftPanel}
      </div>
      <div
        className={clsx("right-panel-wrapper", {
          scrollable: mainPanel !== "right",
        })}
      >
        {rightPanel}
      </div>
    </div>
  );
};

export default DashboardLayout;
