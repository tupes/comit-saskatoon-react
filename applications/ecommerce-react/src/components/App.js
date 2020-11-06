import React, { useState } from "react";

import Header from "./Header";
import ItemCategories from "./ItemCategories";
import ItemsList from "./ItemsList";
import Footer from "./Footer";

import { getItems } from "../data";

export default function App() {
  const [user, setUser] = useState({
    isLoggedIn: false,
    cart: [],
  });
  const [count, setCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const sportItems = getItems();

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

  return (
    <div className="container">
      <Header
        isLoggedIn={user.isLoggedIn}
        count={count}
        handleClick={handleLoginClick}
      />
      <ItemCategories handleSelectCategory={handleSelectCategory} />
      <ItemsList
        items={sportItems.filter((item) => item.category === selectedCategory)}
        handleAddToCartClick={handleAddToCartClick}
      />
      <Footer />
    </div>
  );
}
