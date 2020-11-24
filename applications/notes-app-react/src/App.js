import React from "react";
import NotesProvider from "./contexts/NotesProvider";

import Pages from "./pages";

export default function App() {
  return (
    <div>
      <NotesProvider>
        <Pages />
      </NotesProvider>
    </div>
  );
}
