import React, { useState, useContext, createContext } from "react";
import { useHistory } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getToken,
} from "../firebase/auth";

import { getUser, addUser, getCartItems } from "../firebase/userRepository";

import { addItemToCart } from "../api/itemRepository";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export default function UserProvider(props) {
  const history = useHistory();

  const [user, setUser] = useState(null);
  const [currentError, setCurrentError] = useState(null);

  const updateState = (userData) => {
    console.log(userData);
    setUser({
      ...userData,
    });
    setCurrentError(null);
    history.push("/");
  };

  const handleSubmitSignUp = async (event, email, password) => {
    event.preventDefault();
    try {
      const authUser = await createUserWithEmailAndPassword(email, password);
      const userData = addUser({ email, uid: authUser.user.uid });
      updateState(userData);
    } catch (error) {
      setCurrentError(error);
    }
  };

  const handleSubmitLogin = async (event, email, password) => {
    event.preventDefault();
    try {
      const authUser = await signInWithEmailAndPassword(email, password);
      const token = await getToken();
      const userData = await getUser(authUser.user.uid);
      userData.token = token;
      userData.cart = await getCartItems(authUser.user.uid);
      updateState(userData);
    } catch (error) {
      setCurrentError(error);
    }
  };

  const handleSignOut = async () => {
    try {
      console.log("Calling signOut");
      const result = await signOut();
      console.log(result);
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCartClick = async (item) => {
    try {
      await addItemToCart(user.uid, item.id, user.token);
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
