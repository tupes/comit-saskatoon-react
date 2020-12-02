import React, { useContext } from "react";
import { NotesContext } from "../contexts/NotesProvider";
import Note from "../components/Note";

export default function NotesFeed() {
  const { notes } = useContext(NotesContext);

  return (
    <div>
      {notes.map((note) => (
        <div>
          <Note note={note} />
        </div>
      ))}
    </div>
  );
}
