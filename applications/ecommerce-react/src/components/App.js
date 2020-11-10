import React, { useState, useEffect } from "react";
import { orderBy } from "lodash";
import axios from "axios";

import Header from "./Header";
import ItemCategories from "./ItemCategories";
import ItemsList from "./ItemsList";
import Footer from "./Footer";

const SERVER_URL = "http://localhost:3000";

export default function App() {
  const [items, setItems] = useState([]);
  const [itemFields, setItemFields] = useState([]);
  const [itemCategories, setItemCategories] = useState([]);

  const [user, setUser] = useState({
    isLoggedIn: false,
    cart: [],
  });
  const [selectedCategory, setSelectedCategory] = useState("all");
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

  const handleLoginClick = async () => {
    const updatedUser = { ...user, isLoggedIn: !user.isLoggedIn };
    const response = await axios.put(`${SERVER_URL}/users/1`, updatedUser);
    if (response.status < 400) {
      setUser(updatedUser);
    } else {
      console.log(response);
    }
  };

  const handleAddToCartClick = (item) => {
    console.log(item);
    const updatedCart = [...user.cart, item];
    setUser({ ...user, cart: updatedCart });
    console.log(user.cart);
  };

  const handleSelectCategory = (category) => {
    console.log(category);
    setSelectedCategory(category);
  };

  const handleSelectSortField = (field) => {
    console.log(field);
    setSelectedSortField(field);
  };

  const getItemsToDisplay = () => {
    const filteredItems = items.filter(
      (item) => selectedCategory === "all" || item.category === selectedCategory
    );
    return orderBy(filteredItems, selectedSortField, "asc");
  };

  return (
    <div className="container">
      <Header isLoggedIn={user.isLoggedIn} handleClick={handleLoginClick} />
      <ItemCategories
        categories={itemCategories}
        handleSelectCategory={handleSelectCategory}
      />
      <ItemsList
        items={getItemsToDisplay()}
        handleAddToCartClick={handleAddToCartClick}
      />
      <Footer />
    </div>
  );
}
