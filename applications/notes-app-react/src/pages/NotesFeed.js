import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NotesContext } from "../contexts/NotesProvider";
import Note from "../components/Note";

const NoteWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid #f5f4f0;
`;

export default function NotesFeed() {
  const { getNotes } = useContext(NotesContext);
  const notes = getNotes();
  return (
    <div>
      {notes.map((note) => (
        <NoteWrapper>
          <Note note={note} />
          <Link to={`note/${note.id}`}>Permalink</Link>
        </NoteWrapper>
      ))}
    </div>
  );
}
