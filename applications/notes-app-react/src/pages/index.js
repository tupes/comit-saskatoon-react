import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import SignUp from "./SignUp";

export default function Pages() {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={Profile} />
      </Layout>
    </Router>
  );
}
