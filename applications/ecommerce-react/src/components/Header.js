import React from "react";

export default function Header(props) {
  return (
    <header className="page-header">
      <h1>Sports Store</h1>
      <button onClick={props.handleClick}>
        {props.currentPage === "login" ? "Items" : "Log in"}
      </button>
    </header>
  );
}
