import React, { useContext } from "react";
import { ItemsContext } from "./ItemsProvider";

export default function ItemsList() {
  const { items, handleAddToCartClick } = useContext(ItemsContext);

  return (
    <section className="items">
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
    </section>
  );
}
