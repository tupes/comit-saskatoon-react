import React, { createContext, useState, useContext, useEffect } from "react";
import { getNotes, createNote } from "../firebase/firestore/notesRepository";
import { AccountContext } from "./AccountProvider";

export const NotesContext = createContext();

export default function NotesProvider(props) {
  const [notes, setNotes] = useState([]);
  const [currentError, setCurrentError] = useState(null);
  const { user } = useContext(AccountContext);

  useEffect(() => {
    const loadNotes = async (uid) => {
      const loadedNotes = await getNotes(uid);
      console.log(loadedNotes);
      setNotes(loadedNotes);
    };
    if (user) {
      loadNotes(user.uid);
    }
  }, [user]);

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
