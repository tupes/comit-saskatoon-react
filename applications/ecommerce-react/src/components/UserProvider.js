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

  const [user, setUser] = useState({
    isLoggedIn: false,
    email: "",
    uid: null,
    cart: [],
  });
  const [currentError, setCurrentError] = useState(null);

  const updateState = async (uid, email) => {
    const cart = await getCartItems(uid);
    console.log(cart);
    setUser({
      ...user,
      isLoggedIn: true,
      email,
      uid,
      cart,
    });
    setCurrentError(null);
    history.push("/");
  };

  const handleSubmitSignUp = async (event, email, password) => {
    event.preventDefault();
    try {
      const authUser = await createUserWithEmailAndPassword(email, password);
      console.log(authUser);
      const userRef = addUser({ email, uid: authUser.user.uid });
      console.log(userRef);
      updateState(authUser.user.uid);
    } catch (error) {
      setCurrentError(error);
    }
  };

  const handleSubmitLogin = async (event, email, password) => {
    event.preventDefault();
    try {
      const authUser = await signInWithEmailAndPassword(email, password);
      console.log(authUser);
      updateState(authUser.user.uid);
    } catch (error) {
      setCurrentError(error);
    }
  };

  const handleSignOut = async () => {
    try {
      console.log("Calling signOut");
      const result = await signOut();
      console.log(result);
      setUser({
        isLoggedIn: false,
        email: "",
        uid: null,
        cart: [],
      });
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
