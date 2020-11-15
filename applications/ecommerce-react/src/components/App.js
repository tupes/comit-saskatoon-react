import React, { useState, useEffect, useMemo, useContext } from "react";
import { orderBy } from "lodash";
import axios from "axios";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import Login from "./Login";
import Header from "./Header";
import Items from "./Items";
import Footer from "./Footer";
import { ItemsContext } from "./ItemsProvider";

const SERVER_URL = "http://localhost:3001";

export default function App() {
  const history = useHistory();
  const { setItems, setItemCategories } = useContext(ItemsContext);
  const [itemFields, setItemFields] = useState([]);

  const [user, setUser] = useState({
    isLoggedIn: false,
    cart: [],
  });
  const [selectedSortField, setSelectedSortField] = useState("id");

  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get(`${SERVER_URL}/items`);
      setItems(response.data);
    };
    const getItemFields = async () => {
      const response = await axios.get(`${SERVER_URL}/itemFields`);
      setItemFields(response.data);
    };
    const getItemCategories = async () => {
      const response = await axios.get(`${SERVER_URL}/itemCategories`);
      setItemCategories(response.data);
    };

    getItems();
    getItemFields();
    getItemCategories();
  }, []);

  const handleSubmitLogin = async (event, data) => {
    console.log(data.email);
    console.log(data.password);
    event.preventDefault();
    const updatedUser = { ...user, isLoggedIn: !user.isLoggedIn };
    const response = await axios.put(`${SERVER_URL}/users/1`, updatedUser);
    if (response.status < 400) {
      setUser(updatedUser);
      history.push("/");
    } else {
      console.log(response);
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
      <Header isLoggedIn={user.isLoggedIn}>
        <h2>Showing children</h2>
      </Header>

      <Switch>
        <Route path="/items" render={() => <Items />}></Route>
        <Route
          path="/login"
          render={() => <Login handleSubmit={handleSubmitLogin}></Login>}
        ></Route>
        <Redirect to="/items" />
      </Switch>

      <Footer />
    </div>
  );
}
