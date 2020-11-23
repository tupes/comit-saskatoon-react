import React, { createContext, useContext, useState } from "react";

const NotesContext = createContext();
export const useNotes = () => useContext(NotesContext);

export default function NotesProvider(props) {
  const [notes, setNotes] = useState([]);

  const getNotes = () => {
    return [{ content: "Note 1" }, { content: "Note 2" }];
  };

  const createNote = () => {};

  const updateNote = () => {};

  const deleteNote = () => {};

  return (
    <NotesContext.Provider
      value={{
        notes,
        getNotes,
        createNote,
        updateNote,
        deleteNote,
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
}
