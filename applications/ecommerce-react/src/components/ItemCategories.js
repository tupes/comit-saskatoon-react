import React from "react";

export default function ItemCategories(props) {
  const categories = [
    "all",
    "watersports",
    "soccer",
    "basketball",
    "hockey",
    "boardgames",
  ];

  return (
    <ul className="nav-links">
      {categories.map((category) => {
        return (
          <li>
            <button onClick={() => props.handleSelectCategory(category)}>
              {category}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
