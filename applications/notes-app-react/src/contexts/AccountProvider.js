import React, { useState, useContext, createContext } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "../firebase/auth";

import { getUser, addUser } from "../firebase/userRepository";

const AccountContext = createContext();
export const useAccount = () => useContext(AccountContext);

export default function AccountProvider(props) {
  const [user, setUser] = useState(null);
  const [currentError, setCurrentError] = useState(null);

  const updateState = (userData) => {
    setUser({
      ...userData,
    });
    setCurrentError(null);
  };

  const handleSubmitSignUp = async (event, values) => {
    event.preventDefault();
    try {
      const authUser = await createUserWithEmailAndPassword(
        values.email,
        values.password
      );
      delete values.password;
      const userData = addUser({ ...values, uid: authUser.user.uid });
      updateState(userData);
    } catch (error) {
      setCurrentError(error);
    }
  };

  const handleSubmitLogin = async (event, values) => {
    event.preventDefault();
    try {
      const authUser = await signInWithEmailAndPassword(
        values.email,
        values.password
      );
      const userData = await getUser(authUser.user.uid);
      updateState(userData);
    } catch (error) {
      setCurrentError(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AccountContext.Provider
      value={{
        user,
        error: currentError,
        handleSubmitSignUp,
        handleSubmitLogin,
        handleSignOut,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
}
