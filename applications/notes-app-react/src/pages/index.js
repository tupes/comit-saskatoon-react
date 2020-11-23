import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Favorites from "./Favorites";
import Home from "./Home";
import Notes from "./Notes";

export default function Pages() {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/notes" component={Notes} />
        <Route path="/favorites" component={Favorites} />
      </Layout>
    </Router>
  );
}
