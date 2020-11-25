import React from "react";
import AccountProvider from "./contexts/AccountProvider";
import NotesProvider from "./contexts/NotesProvider";

import Pages from "./pages";

export default function App() {
  return (
    <div>
      <AccountProvider>
        <NotesProvider>
          <Pages />
        </NotesProvider>
      </AccountProvider>
    </div>
  );
}
