import React, { useState, useContext, createContext } from "react";
import { useHistory } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "../firebase/auth";

import {
  addUser,
  addItemToCart,
  getCartItems,
} from "../firebase/userRepository";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export default function UserProvider(props) {
  const history = useHistory();

  const [user, setUser] = useState(null);
  const [currentError, setCurrentError] = useState(null);

  const updateState = async (userData) => {
    const cart = await getCartItems(userData.uid);
    console.log(cart);
    setUser({
      ...user,
      ...userData,
    });
    setCurrentError(null);
    history.push("/");
  };

  const handleSubmitSignUp = async (event, email, password) => {
    event.preventDefault();
    try {
      const newUser = await createUserWithEmailAndPassword(email, password);
      await addUser(newUser);
      updateState(newUser);
    } catch (error) {
      setCurrentError(error);
    }
  };

  const handleSubmitLogin = async (event, email, password) => {
    event.preventDefault();
    try {
      const existingUser = await signInWithEmailAndPassword(email, password);
      updateState(existingUser);
    } catch (error) {
      setCurrentError(error);
    }
  };

  const handleSignOut = async () => {
    try {
      console.log("Calling signOut");
      await signOut();
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCartClick = async (item) => {
    try {
      await addItemToCart(user.uid, item.id);
      setUser({ ...user, cart: [...user.cart, item] });
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
        handleSignOut,
        handleAddToCartClick,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
