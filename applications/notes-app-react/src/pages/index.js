import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "./Home";
import Login from "./Login";

export default function Pages() {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Layout>
    </Router>
  );
}
