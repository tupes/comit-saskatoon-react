import React, { useState, useContext } from "react";
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

export default function CreateNote() {
  const [content, setContent] = useState("");
  const { handleCreateNote, error } = useContext(NotesContext);

  return (
    <Wrapper>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateNote(content);
        }}
      >
        <TextArea
          required
          type="text"
          name="content"
          placeholder="Note content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <Button type="submit">Save</Button>
      </Form>

      {error && error.message}
    </Wrapper>
  );
}
