import React, { createContext, useContext, useState } from "react";

const AccountContext = createContext();
export const useAccount = () => useContext(AccountContext);

export default function AccountProvider(props) {
  const [user, setUser] = useState(null);

  const handleSignUp = () => {};

  const handleLogin = () => {};

  const handleLogout = () => {};

  return (
    <AccountContext.Provider
      value={{
        user,
        handleSignUp,
        handleLogin,
        handleLogout,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
}
