"use client";

import { selectFilteredNotes } from "@/store/notesSelectors";
import { normalizeString } from "@/utils/normalizeString";
import clsx from "clsx";
import Link from "next/link";
import { useMemo } from "react";
import { useShallow } from "zustand/shallow";
import { useNotes } from "../../../store/useNotes";
import List from "../List/List";
import ListCard from "../ListCard/ListCard";
import Logo from "../Logo/Logo";
import Text from "../Text/Text";
import { IconArchive, IconHome, IconTag } from "../icons";

import "./Sidebar.css";

type Props = { className?: string };

const Sidebar = ({ className }: Props) => {
  const notes = useNotes(useShallow(selectFilteredNotes("all")));

  const tags = useMemo(
    () => Array.from(new Set(notes.flatMap((item) => item.tags || []))),
    [notes]
  );

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
      <div className="sidebar__body">
        <SidebarTags tags={tags} />
      </div>
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

const SidebarTags = ({ tags }: { tags: string[] | null }) => (
  <>
    <div className="sidebar__body-header">
      <Text color="light" weight="medium">
        Tags
      </Text>
    </div>
    {tags && (
      <div className="sidebar__tags-list scrollable">
        <List tag="ul" className="sidebar__tags" direction="column">
          {tags.map((tag) => (
            <li key={tag}>
              <ListCard.Link
                href={normalizeString("/tag/" + tag)}
                icon={<IconTag width={20} height={20} />}
                text={tag}
              />
            </li>
          ))}
        </List>
      </div>
    )}
  </>
);

export default Sidebar;
