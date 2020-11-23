import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AccountProvider from "./hooks/AccountProvider";
import NotesProvider from "./hooks/NotesProvider";
import Pages from "./pages";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <AccountProvider>
        <NotesProvider>
          <Pages />
        </NotesProvider>
      </AccountProvider>
    </div>
  );
}
