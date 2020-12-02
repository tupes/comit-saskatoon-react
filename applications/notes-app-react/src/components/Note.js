import React from "react";

export default function Note({ note }) {
  return (
    <article>
      {note.userId} {note.createdDate}
      {note.content}
    </article>
  );
}
