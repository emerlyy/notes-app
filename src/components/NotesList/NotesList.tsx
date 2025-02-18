"use client";

import { Note } from "@/types";
import clsx from "clsx";
import { useShallow } from "zustand/shallow";
import { useNotes } from "../../store/useNotes";
import CreateNewNoteButton from "../CreateNewNoteButton/CreateNewNoteButton";
import NoteCard from "../NoteCard/NoteCard";
import List from "../ui/List/List";
import Text from "../ui/Text/Text";
import "./NotesList.css";

type Props = {
  notes: Note[];
  subtitle?: string;
  className?: string;
};

const NotesList = ({ notes, subtitle, className }: Props) => {
  const { setActiveNote, activeNote } = useNotes(
    useShallow((state) => ({
      setActiveNote: state.setActiveNote,
      activeNote: state.activeNote,
    }))
  );

  return (
    <div className={clsx("notes-list", className)}>
      <CreateNewNoteButton />
      {subtitle && (
        <Text color="light" tag="p" size="regular">
          {subtitle}
        </Text>
      )}
      <List direction="column" tag="ul">
        {notes.map((item) => {
          const isActive = activeNote === item.id;
          return (
            <li key={item.id} className="notes-list__item">
              <NoteCard
                title={item.title}
                lastEdited={item.lastEdited}
                tags={item.tags}
                isActive={isActive}
                onClick={() => setActiveNote(item.id)}
              />
            </li>
          );
        })}
      </List>
    </div>
  );
};

export default NotesList;
