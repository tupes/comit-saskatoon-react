import React from "react";
import { useNotes } from "../hooks/NotesProvider";

export default function Notes() {
  const { getNotes } = useNotes();
  const notes = getNotes();

  return (
    <ul>
      {notes.map((note) => (
        <li>{note.content}</li>
      ))}
    </ul>
  );
}
