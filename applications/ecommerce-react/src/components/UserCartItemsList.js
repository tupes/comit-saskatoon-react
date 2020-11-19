import React, { useContext } from "react";
import { UserContext } from "./UserProvider";
import { ItemsContext } from "./ItemsProvider";

export default function UserCartItemsList(props) {
  const { user } = useContext(UserContext);
  const { items } = useContext(ItemsContext);
  console.log(user);

  // const cartItems=user.cart.map((useritem)=> useritem.itemId);
  // console.log(cartItems);

  const userCartItems=items.filter((item)=> user.cart.map((useritem)=> useritem.itemId).includes(item.id)? item:null);
  console.log(userCartItems);
  // const filteredItems = items.filter(
  //   (item) => {
  //   user.cart.forEach((useritem) => {
  //     const i= item.id===useritem.itemId? item : null;
  //     console.log(i);
  //     //return i;
     
  //   })
    
  // }
  // );
  // console.log(filteredItems);
  return (
    <section className="items">
      <ul className="items-list">
        {userCartItems.map((item) => (
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
