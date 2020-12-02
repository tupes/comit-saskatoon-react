import React, { useState, createContext } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "../firebase/auth";

import { getUser, saveUser } from "../firebase/userRepository";

export const AccountContext = createContext();

export default function AccountProvider(props) {
  const [user, setUser] = useState(null);
  const [currentError, setCurrentError] = useState(null);

  const updateState = (userData) => {
    console.log(userData);
    setUser(userData);
    setCurrentError(null);
  };

  const handleSubmitSignUp = async (values) => {
    try {
      const authUser = await createUserWithEmailAndPassword(
        values.email,
        values.password
      );
      delete values.password;
      const userData = saveUser({ ...values, uid: authUser.user.uid });
      updateState(userData);
    } catch (error) {
      setCurrentError(error);
    }
  };

  const handleSubmitLogin = async (values) => {
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

  const handleUpdateUser = async (values) => {
    try {
      const userData = await saveUser({ ...user, ...values });
      updateState(userData);
    } catch (error) {
      setCurrentError(error);
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
        handleUpdateUser,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
}
