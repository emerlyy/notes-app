import Header from "@/components/ui/Header/Header";
import Sidebar from "@/components/ui/Sidebar/Sidebar";

import "./MainLayout.css";

type Props = {
  title: string;
  children: React.ReactNode;
};

const MainLayout = ({ title, children }: Props) => {
  return (
    <div className="layout">
      <Header className="layout__header" title={title} />
      <Sidebar className="layout__sidebar" />
      <main className="layout__outlet">{children}</main>
    </div>
  );
};

export default MainLayout;
