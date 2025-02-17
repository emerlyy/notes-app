"use client";
import data from "@/data/data.json";
import { Note } from "@/types";
import { generateNote } from "@/utils/generateNote";
import { toRecords } from "@/utils/toRecords";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// type Store = {
//   activeNote: string | null;
//   notes: Note[];
//   addNote: (note: Pick<Note, "title" | "content" | "tags">) => void;
//   removeNote: (noteId: string) => void;
//   archiveNote: (noteId: string) => void;
// };

type State = {
  activeNote: string | null;
  createMode: boolean;
  notes: Record<string, Note>;
};

type Actions = {
  setActiveNote: (noteId: string) => void;
  setCreateMode: (createMode: boolean) => void;
  createNote: (note: Pick<Note, "title" | "content" | "tags">) => void;
  removeNote: (noteId: string) => void;
  archiveNote: (noteId: string) => void;
  updateNote: (
    noteId: string,
    changes: Partial<Omit<Note, "id" | "lastEdited">>,
    updateTime?: boolean
  ) => void;
};

export type NotesStore = State & Actions;

const initialNotes = toRecords(data);

// const notesSlice: StateCreator<Store> = (set, get) => ({
//   activeNote: null,
//   notes: initialNotes,
//   addNote: (note) =>
//     set((state) => ({ notes: [...state.notes, createNote(note)] })),
//   removeNote: (noteId) =>
//     set((state) => ({
//       notes: [...state.notes.filter((item) => item.id !== noteId)],
//     })),
//   archiveNote: (noteId) => {
//     const noteIndex = get().notes.findIndex((item) => item.id === noteId);
//     const note = get().notes[noteIndex];
//     set((state) => ({
//       notes: [
//         ...state.notes.slice(0, noteIndex),
//         {
//           ...note,
//           isArchived: !note.isArchived,
//         },
//         ...state.notes.slice(noteIndex + 1),
//       ],
//     }));
//   },
// });

// const notesSlice: StateCreator<State & Actions> = (set, get) => ({
//   activeNote: null,
//   notes: initialNotes,
//   addNote: (note) =>
//     set((state) => {
//       state.notes.push(createNote(note));
//     }),
//   removeNote: (noteId) =>
//     set((state) => {
//       notes: [...state.notes.filter((item) => item.id !== noteId)],
//     }),
//   archiveNote: (noteId) => {
//     const noteIndex = get().notes.findIndex((item) => item.id === noteId);
//     const note = get().notes[noteIndex];
//     set((state) => ({
//       notes: [
//         ...state.notes.slice(0, noteIndex),
//         {
//           ...note,
//           isArchived: !note.isArchived,
//         },
//         ...state.notes.slice(noteIndex + 1),
//       ],
//     }));
//   },
// });

export const useNotes = create<NotesStore>()(
  devtools(
    immer((set, get) => ({
      activeNote: null,
      createMode: false,
      notes: initialNotes,
      createNote: (noteInfo) => {
        const { id, note } = generateNote(noteInfo);
        set((state) => {
          state.notes[id] = note;
          
        });
        get().setActiveNote(id);
      },
      archiveNote: (noteId) =>
        set((state) => {
          state.notes[noteId].isArchived = !state.notes[noteId].isArchived;
        }),
      removeNote: (noteId) =>
        set((state) => {
          delete state.notes[noteId];
        }),
      setActiveNote: (noteId) =>
        set({
          activeNote: noteId,
          createMode: false,
        }),
      setCreateMode: (createMode) => set({ createMode, activeNote: null }),
      updateNote: (noteId, changes, updateTime = true) =>
        set((state) => {
          const updatedNote = {
            ...state.notes[noteId],
            ...changes,
          };
          if (updateTime) {
            updatedNote.lastEdited = new Date().toISOString();
          }
          state.notes[noteId] = updatedNote;
        }),
    }))
  )
);
