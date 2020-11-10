import React, { useState, useEffect } from "react";
import { orderBy } from "lodash";
import axios from "axios";

import Header from "./Header";
import ItemCategories from "./ItemCategories";
import ItemsList from "./ItemsList";
import Footer from "./Footer";

import { getItems, getItemFields } from "../data";

export default function App() {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState({
    isLoggedIn: false,
    cart: [],
  });
  const [count, setCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSortField, setSelectedSortField] = useState("id");

  useEffect(() => {
    const getItems = async () => {
      const items = await axios.get("http://localhost:3000/items");
      console.log(items.data);
    };
    getItems();
  }, []);

  const itemFields = getItemFields();

  const handleLoginClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    console.log(`The current click count is ${newCount}`);
    setUser({ ...user, isLoggedIn: !user.isLoggedIn }); // just a quicker way of doing the logic below
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
      <Header
        isLoggedIn={user.isLoggedIn}
        count={count}
        handleClick={handleLoginClick}
      />
      <ItemCategories handleSelectCategory={handleSelectCategory} />
      <ItemsList
        items={getItemsToDisplay()}
        handleAddToCartClick={handleAddToCartClick}
      />
      <Footer />
    </div>
  );
}
