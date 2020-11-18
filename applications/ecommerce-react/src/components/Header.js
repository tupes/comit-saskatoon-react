import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header(props) {
  const location = useLocation();

  return (
    <header className="page-header">
      <Link to="/">
        <h1>Sports Store</h1>
      </Link>
      {location.pathname !== "/login" && <Link to="/login">Log in</Link>}
      {location.pathname !== "/signup" && <Link to="/signup">Sign up</Link>}
      {location.pathname !== "/cart" && <Link to="/cart">Cart</Link>}
    </header>
  );
}
