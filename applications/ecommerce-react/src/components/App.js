import React, { useState } from "react";
import axios from "axios";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import SignUp from "./SignUp";
import Login from "./Login";
import Header from "./Header";
import Items from "./Items";
import Footer from "./Footer";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../firebase/auth";

import { addUser, addItemToCart } from "../firebase/userRepository";

const SERVER_URL = "http://localhost:3001";

export default function App() {
  const history = useHistory();

  const [currentError, setCurrentError] = useState(null);
  const [user, setUser] = useState({
    isLoggedIn: false,
    email: "",
    uid: null,
    cart: [],
  });
  const [selectedSortField, setSelectedSortField] = useState("id");

  const handleSubmitSignUp = async (event, email, password) => {
    event.preventDefault();
    try {
      const authUser = await createUserWithEmailAndPassword(email, password);
      console.log(authUser);
      const userRef = addUser({ email, uid: authUser.user.uid });
      console.log(userRef);
      setUser({ ...user, isLoggedIn: true, email, uid: authUser.user.uid });
      setCurrentError(null);
      history.push("/");
    } catch (error) {
      setCurrentError(error);
    }
  };

  const handleSubmitLogin = async (event, email, password) => {
    event.preventDefault();
    try {
      const authUser = await signInWithEmailAndPassword(email, password);
      console.log(authUser);
      setUser({ ...user, isLoggedIn: true, email, uid: authUser.user.uid });
      setCurrentError(null);
      history.push("/");
    } catch (error) {
      setCurrentError(error);
    }
  };

  const handleAddToCartClick = async (item) => {
    try {
      await addItemToCart(user.uid, item.id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectSortField = (field) => {
    console.log(field);
    setSelectedSortField(field);
  };

  return (
    <div className="container">
      <Header isLoggedIn={user.isLoggedIn} />

      <Switch>
        <Route
          path="/items"
          render={() => <Items handleAddToCartClick={handleAddToCartClick} />}
        ></Route>
        <Route
          path="/signup"
          render={() => (
            <SignUp
              error={currentError}
              handleSubmit={handleSubmitSignUp}
            ></SignUp>
          )}
        ></Route>
        <Route
          path="/login"
          render={() => (
            <Login
              error={currentError}
              handleSubmit={handleSubmitLogin}
            ></Login>
          )}
        ></Route>
        <Redirect to="/items" />
      </Switch>

      <Footer />
    </div>
  );
}
