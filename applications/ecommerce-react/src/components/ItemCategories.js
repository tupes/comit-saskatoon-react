import React from "react";
import { useItems } from "./ItemsProvider";

export default function ItemCategories() {
  const { itemCategories, handleSelectCategory } = useItems();

  return (
    <ul className="item-categories">
      {itemCategories.map((category, i) => {
        return (
          <li key={i}>
            <button onClick={() => handleSelectCategory(category)}>
              {category}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
