import React from "react";
import { Link } from "react-router-dom";
import { useAccount } from "../contexts/AccountProvider";

export default function Layout(props) {
  const { handleSignOut, user } = useAccount();

  return (
    <div>
      <header>
        <h1>Notes App</h1>
        <button onClick={handleSignOut}>Logout</button>
        {user && <div>{user.username}</div>}
      </header>
      <nav>
        <ul>
          <li>Home</li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>Notes</li>
        </ul>
      </nav>
      {props.children}
    </div>
  );
}
