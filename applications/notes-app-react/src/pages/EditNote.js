import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
  useEffect(() => {
    const id = props.match.params.id;
    const note = getNote(id);
    setNote(note);
  }, [props.match.params.id]);

  const [note, setNote] = useState(null);
  const [content, setContent] = useState((note && note.content) || "");
  const { getNote, handleUpdateNote, error } = useContext(NotesContext);
  const history = useHistory();

  return (
    <Wrapper>
      <Form
        onSubmit={async (event) => {
          event.preventDefault();
          await handleUpdateNote(content);
          if (!error) history.push("/");
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
