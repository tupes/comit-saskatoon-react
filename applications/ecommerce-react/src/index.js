import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/app.css";

import App from "./components/App";
import ItemsProvider from "./components/ItemsProvider";

ReactDOM.render(
  <ItemsProvider>
    <Router>
      <App />
    </Router>
  </ItemsProvider>,
  document.getElementById("root")
);
