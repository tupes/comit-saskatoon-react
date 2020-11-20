import React from "react";
import { useItems } from "./ItemsProvider";
import { useUser } from "./UserProvider";

export default function ItemsList(props) {
  const { items } = useItems();
  const { handleAddToCartClick } = useUser();

  return (
    <ul className="items-list">
      {items.map((item) => (
        <li key={item.name}>
          <img src={item.image} alt="" />
          <h3>{item.name}</h3>
          <div>${item.price}</div>
          <p>{item.description}</p>
          <button className="item" onClick={() => handleAddToCartClick(item)}>
            Add to Cart
          </button>
        </li>
      ))}
    </ul>
  );
}
