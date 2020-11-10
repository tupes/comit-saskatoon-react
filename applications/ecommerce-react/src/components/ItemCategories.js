import React from "react";

export default function ItemCategories(props) {
  return (
    <ul className="nav-links">
      {props.categories.map((category) => {
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
