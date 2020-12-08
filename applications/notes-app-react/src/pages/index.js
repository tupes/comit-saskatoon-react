import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import SignUp from "./SignUp";
import CreateNote from "./CreateNote";
import EditNote from "./EditNote";
import NotesFeed from "./NotesFeed";
import { AccountContext } from "../contexts/AccountProvider";

const PrivateRoute = (props) => {
  const { user } = useContext(AccountContext);
  const { component: Component, path } = props;
  return (
    <Route
      path={path}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default function Pages() {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/new" component={CreateNote} />
        <PrivateRoute path="/notes" component={NotesFeed} />
        <PrivateRoute path="/notes/:id" component={EditNote} />
      </Layout>
    </Router>
  );
}
