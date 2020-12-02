import React, { createContext, useState, useContext } from "react";
import { createNote } from "../firebase/notesRepository";
import { AccountContext } from "./AccountProvider";

export const NotesContext = createContext();

export default function NotesProvider(props) {
  const [notes, setNotes] = useState([]);
  const [currentError, setCurrentError] = useState(null);
  const { user } = useContext(AccountContext);

  const handleCreateNote = async (content) => {
    try {
      const note = {
        content,
        userId: user.uid,
        createdDate: new Date().toISOString(),
      };
      const savedNote = await createNote(note);
      note.id = savedNote.key;
      console.log(savedNote);
      setNotes([...notes, note]);
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
