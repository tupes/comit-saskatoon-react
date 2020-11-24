import React from "react";

export default function Layout(props) {
  return (
    <div>
      <header>
        <h1>Notes App</h1>
      </header>
      <nav>
        <ul>
          <li>Home</li>
          <li>Login</li>
          <li>Notes</li>
        </ul>
      </nav>
      {props.children}
    </div>
  );
}
