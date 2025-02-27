"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import Search from "../../Search/Search";
import { IconSettings } from "../icons";
import Title from "../Title/Title";
import "./Header.css";

type Props = {
  className?: string;
};

const getTitle = (pathname: string, search?: string) => {
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  switch (pathSegments[0]) {
    case "notes":
      return "All Notes";
    case "archived":
      return "Archived Notes";
    case "tag":
      return `Notes Tagged: ${pathSegments[1]}`;
    case "settings":
      return "Settings";
    case "search": {
      return `Showing results for: ${search}`;
    }
    default:
      return "";
  }
};

const Header = ({ className }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("q") || "";
  const title = getTitle(pathname, search);

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
