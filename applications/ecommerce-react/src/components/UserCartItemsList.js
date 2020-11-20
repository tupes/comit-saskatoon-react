import React from "react";
import { useUser } from "./UserProvider";
import { useItems } from "./ItemsProvider";

export default function UserCartItemsList() {
  const { user } = useUser();
  const { getItemById } = useItems();

  return (
    <>
      <div></div>
      <ul className="items-list">
        {user.cart.map((cartItem) => {
          const item = getItemById(cartItem.itemId);
          return (
            <li key={item.name}>
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
              <div>${item.price}</div>
              <p>{item.description}</p>
              <p>{cartItem.quantity}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
