import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header(props) {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <header className="page-header">
      <Link to="/">
        <h1>Sports Store</h1>
      </Link>
      {location.pathname !== "/login" && <Link to="/login">Log in</Link>}
    </header>
  );
}
