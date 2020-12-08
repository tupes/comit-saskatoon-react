import React, { createContext, useState, useContext, useEffect } from "react";
import * as notesRepository from "../firebase/firestore/notesRepository";
import { AccountContext } from "./AccountProvider";

export const NotesContext = createContext();

export default function NotesProvider(props) {
  const [notes, setNotes] = useState([]);
  const [currentError, setCurrentError] = useState(null);
  const { user } = useContext(AccountContext);

  useEffect(() => {
    const loadNotes = async (uid) => {
      const loadedNotes = await notesRepository.getNotes(uid);
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
      const savedNote = await notesRepository.createNote(note);
      note.id = savedNote.id;
      console.log(savedNote);
      setNotes([...notes, note]);
      setCurrentError(null);
    } catch (error) {
      setCurrentError(error);
    }
  };

  const handleUpdateNote = () => {};
  const getNotes = () => {
    return notes.map((note) => ({ ...note, author: user.username }));
  };

  const getNote = (id) => notes.find((note) => note.id === id);

  return (
    <NotesContext.Provider
      value={{
        getNotes,
        getNote,
        handleCreateNote,
        handleUpdateNote,
        error: currentError,
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
}
