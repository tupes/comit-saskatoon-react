import React, { createContext, useContext, useState } from "react";
import { getNotes } from "../firebase/notesRepository";

const NotesContext = createContext();
export const useNotes = () => useContext(NotesContext);

export default function NotesProvider(props) {
  const [notes, setNotes] = useState([]);

  return (
    <NotesContext.Provider
      value={{
        notes,
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
}
