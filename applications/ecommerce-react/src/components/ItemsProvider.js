import React, { useState, useEffect, useMemo, createContext } from "react";
import { getItems } from "../firebase/repository";

export const ItemsContext = createContext();

export default function ItemsProvider({ children }) {
  const [items, setItems] = useState([]);
  const [itemCategories, setItemCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchItems = async () => {
      //const response = await axios.get(`${SERVER_URL}/items`);
      const items = await getItems();
      setItems(items);
    };

    fetchItems();
  }, []);

  const itemsToDisplay = useMemo(() => {
    console.log("Getting items to display");
    const filteredItems = items.filter(
      (item) => selectedCategory === "all" || item.category === selectedCategory
    );
    return filteredItems; // orderBy(filteredItems, selectedSortField, "asc");
  }, [items, selectedCategory]);

  const handleSelectCategory = (category) => {
    console.log(category);
    setSelectedCategory(category);
  };

  return (
    <ItemsContext.Provider
      value={{
        items: itemsToDisplay,
        setItems,
        itemCategories,
        setItemCategories,
        handleSelectCategory,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
