import React, { useState, createContext, useContext } from "react";
import { StatusContext } from "./StatusProvider";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "../firebase/auth";

import { getUser, saveUser } from "../firebase/firestore/userRepository";

export const AccountContext = createContext();

export default function AccountProvider(props) {
  const [user, setUser] = useState(null);
  const { error, updateError, clearError } = useContext(StatusContext);

  const updateState = (userData) => {
    console.log(userData);
    setUser(userData);
    clearError();
  };

  const handleSubmitSignUp = async (values) => {
    try {
      const authUser = await createUserWithEmailAndPassword(
        values.email,
        values.password
      );
      delete values.password;
      const userData = { ...values, uid: authUser.user.uid };
      await saveUser(userData);
      updateState(userData);
    } catch (error) {
      updateError(error);
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
      updateError(error);
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
      updateError(error);
    }
  };

  return (
    <AccountContext.Provider
      value={{
        user,
        error,
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
