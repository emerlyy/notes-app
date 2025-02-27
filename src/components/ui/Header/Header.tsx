"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Search from "../../Search/Search";
import { IconSettings } from "../icons";
import Title from "../Title/Title";
import "./Header.css";

type Props = {
  className?: string;
};

const getTitle = (path: string, extra?: string) => {
  switch (path) {
    case "notes":
      return "All Notes";
    case "archived":
      return "Archived Notes";
    case "tag":
      return `Notes Tagged: ${extra}`;
    case "settings":
      return "Settings";
    default:
      return "";
  }
};

const Header = ({ className }: Props) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const title = getTitle(pathSegments[0], pathSegments[1]);

  return (
    <header className={clsx("header", className)}>
      <div>
        {title && (
          <Title size="large" color="text-primary">
            {title}
          </Title>
        )}
      </div>
      <div className="header__right">
        <Search className="header__search" />
        <Link href="/settings">
          <IconSettings width={24} height={24} className="color_light" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
