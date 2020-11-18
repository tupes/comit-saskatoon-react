import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserProvider";

export default function Header(props) {
  const { user, handleSignOut } = useContext(UserContext);

  return (
    <>
      <header className="page-header">
        <Link to="/">
          <h1>Sports Store</h1>
        </Link>
      </header>

      <ul className="user">
        {!user.isLoggedIn ? (
          <>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <button onClick={handleSignOut}>Sign out</button>
            </li>
          </>
        )}
      </ul>
    </>
  );
}
