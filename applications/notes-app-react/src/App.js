import React from "react";
import AccountProvider from "./contexts/AccountProvider";
import NotesProvider from "./contexts/NotesProvider";
import StatusProvider from "./contexts/StatusProvider";
import Pages from "./pages";
import GlobalStyling from "./components/GlobalStyling";

export default function App() {
  return (
    <div>
      <StatusProvider>
        <AccountProvider>
          <NotesProvider>
            <GlobalStyling />
            <Pages />
          </NotesProvider>
        </AccountProvider>
      </StatusProvider>
    </div>
  );
}
