import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/app.css";

import App from "./components/App";
import ItemsProvider from "./components/ItemsProvider";
import UserProvider from "./components/UserProvider";

ReactDOM.render(
  <UserProvider>
    <ItemsProvider>
      <Router>
        <App />
      </Router>
    </ItemsProvider>
  </UserProvider>,
  document.getElementById("root")
);
