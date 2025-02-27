"use client";

import { selectFilteredNotes } from "@/store/notesSelectors";
import { useNotes } from "@/store/useNotes";
import { normalizeString } from "@/utils/normalizeString";
import clsx from "clsx";
import { useMemo } from "react";
import { useShallow } from "zustand/shallow";
import { IconTag } from "../ui/icons";
import List from "../ui/List/List";
import ListCard from "../ui/ListCard/ListCard";
import Text from "../ui/Text/Text";

import "./TagsList.css";

type Props = {
  className?: string;
};

const TagsList = ({ className }: Props) => {
  const notes = useNotes(useShallow(selectFilteredNotes("all")));

  const tags = useMemo(
    () =>
      Array.from(new Set(notes.flatMap((item) => item.tags || []))).toSorted(
        (a, b) => a.localeCompare(b)
      ),
    [notes]
  );

  return (
    <div className={clsx("tags-list", className)}>
      <div className="tags-list__header">
        <Text color="light" weight="medium">
          Tags
        </Text>
      </div>
      {tags && (
        <div className="tags-list__list scrollable">
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
    </div>
  );
};

export default TagsList;
