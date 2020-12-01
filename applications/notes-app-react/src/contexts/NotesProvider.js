import React, { createContext, useState } from "react";
import { createNote } from "../firebase/notesRepository";

export const NotesContext = createContext();

export default function NotesProvider(props) {
  const [notes, setNotes] = useState([]);
  const [currentError, setCurrentError] = useState(null);

  const handleCreateNote = async (note) => {
    try {
      const savedNote = await createNote(note);
      setNotes([...notes, savedNote]);
      setCurrentError(null);
    } catch (error) {
      setCurrentError(error);
    }
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        handleCreateNote,
        error: currentError,
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
}
