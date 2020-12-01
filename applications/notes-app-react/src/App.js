import React from "react";
import AccountProvider from "./contexts/AccountProvider";
import NotesProvider from "./contexts/NotesProvider";

import Pages from "./pages";
import GlobalStyling from "./components/GlobalStyling";

export default function App() {
  return (
    <div>
      <AccountProvider>
        <NotesProvider>
          <GlobalStyling />
          <Pages />
        </NotesProvider>
      </AccountProvider>
    </div>
  );
}
