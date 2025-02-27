"use client";

import clsx from "clsx";
import Link from "next/link";
import List from "../List/List";
import ListCard from "../ListCard/ListCard";
import Logo from "../Logo/Logo";
import { IconArchive, IconHome } from "../icons";

import TagsList from "@/components/TagsList/TagsList";
import "./Sidebar.css";

type Props = { className?: string };

const Sidebar = ({ className }: Props) => {
  return (
    <div className={clsx("sidebar", className)}>
      <div className="sidebar__header">
        <div className="sidebar__logo-container">
          <Link href="/notes">
            <Logo />
          </Link>
        </div>
        <SidebarCategories />
      </div>
      <TagsList />
    </div>
  );
};

const SidebarCategories = () => (
  <List className="sidebar__categories" direction="column">
    <ListCard.Link
      href="/notes"
      icon={<IconHome width={20} height={20} />}
      text="All Notes"
    />
    <ListCard.Link
      href="/archived"
      icon={<IconArchive width={20} height={20} />}
      text="Archived Notes"
    />
  </List>
);

export default Sidebar;
