import React, { useState, useEffect, useMemo, useContext } from "react";
import { orderBy } from "lodash";
import axios from "axios";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import SignUp from "./SignUp";
import Login from "./Login";
import Header from "./Header";
import Items from "./Items";
import Footer from "./Footer";
import { ItemsContext } from "./ItemsProvider";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../firebase/auth";

const SERVER_URL = "http://localhost:3001";

export default function App() {
  const history = useHistory();
  const { setItems, setItemCategories } = useContext(ItemsContext);
  const [itemFields, setItemFields] = useState([]);
  const [currentError, setCurrentError] = useState(null);
  const [user, setUser] = useState({
    isLoggedIn: false,
    email: "",
    uid: null,
    cart: [],
  });
  const [selectedSortField, setSelectedSortField] = useState("id");

  useEffect(() => {
    const getItemFields = async () => {
      const response = await axios.get(`${SERVER_URL}/itemFields`);
      setItemFields(response.data);
    };
    const getItemCategories = async () => {
      const response = await axios.get(`${SERVER_URL}/itemCategories`);
      setItemCategories(response.data);
    };

    getItemFields();
    getItemCategories();
  }, []);

  const handleSubmitSignUp = async (event, email, password) => {
    event.preventDefault();
    try {
      const authUser = await createUserWithEmailAndPassword(email, password);
      console.log(authUser);
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
    const updatedCart = [...user.cart, item];
    const updatedUser = { ...user, cart: updatedCart };
    const response = await axios.put(`${SERVER_URL}/users/1`, updatedUser);
    if (response.status < 400) {
      setUser(updatedUser);
    } else {
      console.log(response);
    }
    console.log(user.cart);
  };

  const handleSelectSortField = (field) => {
    console.log(field);
    setSelectedSortField(field);
  };

  return (
    <div className="container">
      <Header isLoggedIn={user.isLoggedIn} />

      <Switch>
        <Route path="/items" render={() => <Items />}></Route>
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
