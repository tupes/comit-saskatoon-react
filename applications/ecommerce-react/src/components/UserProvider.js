import React, { useState, createContext } from "react";
import { useHistory } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../firebase/auth";

import {
  addUser,
  addItemToCart,
  getCartItems,
} from "../firebase/userRepository";

export const UserContext = createContext();

export default function UserProvider(props) {
  const history = useHistory();

  const [user, setUser] = useState({
    isLoggedIn: false,
    email: "",
    uid: null,
    cart: [],
  });
  const [currentError, setCurrentError] = useState(null);

  const handleSubmitSignUp = async (event, email, password) => {
    event.preventDefault();
    try {
      const authUser = await createUserWithEmailAndPassword(email, password);
      console.log(authUser);
      const userRef = addUser({ email, uid: authUser.user.uid });
      console.log(userRef);
      const cart = await getCartItems(authUser.user.uid);
      console.log(cart);
      setUser({
        ...user,
        isLoggedIn: true,
        email,
        uid: authUser.user.uid,
        cart,
      });
      setCurrentError(null);
      history.push("/");
    } catch (error) {
      setCurrentError(error);
    }
  };

  const handleSubmitLogin = async (event, email, password) => {
    event.preventDefault();
    try {
      const authUser = await signInWithEmailAndPassword(email, password);
      console.log(authUser);
      const cartData = await getCartItems(authUser.user.uid);
      console.log(cartData);
      setUser({
        ...user,
        isLoggedIn: true,
        email,
        uid: authUser.user.uid,
        cart: cartData,
      });
      setCurrentError(null);
      history.push("/");
    } catch (error) {
      setCurrentError(error);
    }
  };

  const handleAddToCartClick = async (item) => {
    try {
      await addItemToCart(user.uid, item.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        error: currentError,
        handleSubmitSignUp,
        handleSubmitLogin,
        handleAddToCartClick,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
