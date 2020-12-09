import React, { createContext, useState, useContext, useEffect } from "react";
import * as notesRepository from "../firebase/firestore/notesRepository";
import { AccountContext } from "./AccountProvider";
import { StatusContext } from "./StatusProvider";

export const NotesContext = createContext();

export default function NotesProvider(props) {
  const [notes, setNotes] = useState([]);
  const { user } = useContext(AccountContext);
  const { error, updateError, clearError } = useContext(StatusContext);

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
      clearError();
    } catch (error) {
      updateError(error);
    }
  };

  const handleUpdateNote = async (note, content) => {
    try {
      const updatedNote = { ...note, content };
      await notesRepository.updateNote(updatedNote);
      const updatedNotes = notes.map((n) => {
        return n.id === updatedNote.id ? updatedNote : n;
      });
      setNotes(updatedNotes);
      clearError();
    } catch (error) {
      updateError(error);
    }
  };

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
        error,
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
}
