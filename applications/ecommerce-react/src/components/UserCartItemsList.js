import React, { useContext } from "react";
import { UserContext } from "./UserProvider";

export default function UserCartItemsList(props) {
  const { user } = useContext(UserContext);
  return (
    <section className="items">
      <ul className="items-list">
        {user.cart.map((item) => (
          <li key={item.name}>
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
            <div>${item.price}</div>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
