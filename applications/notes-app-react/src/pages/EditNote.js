import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import { NotesContext } from "../contexts/NotesProvider";

const Wrapper = styled.div`
  height: 100%;
`;
const Form = styled.form`
  height: 100%;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 90%;
`;

export default function EditNote(props) {
  const [existingNote, setExistingNote] = useState(null);
  const [content, setContent] = useState("");
  const { getNote, handleUpdateNote, error } = useContext(NotesContext);

  useEffect(() => {
    const id = props.match.params.id;
    const note = getNote(id);
    setExistingNote(note);
    setContent(note.content);
  }, [props.match.params.id]);

  return (
    <Wrapper>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          handleUpdateNote(existingNote, content);
        }}
      >
        <TextArea
          required
          type="text"
          name="content"
          placeholder="Type your note here"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <Button type="submit">Save</Button>
      </Form>

      {error && error.message}
    </Wrapper>
  );
}
