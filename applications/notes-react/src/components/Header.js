import React from 'react';
import { Link, useLocation } from "react-router-dom";

export default function Header(props) {
  const location = useLocation();
    return (
      
      <div className="page-header">
        <img src="../imgs/favicon.ico" alt=""/>
        <h1 >Notedly</h1>
        {/* {props.currentPage !== "login" ?(<button onClick={props.handleClick}>
        {props.currentPage === "signup" ? "Log In" :  "Logout"}
        </button>):(<></>)} */}
        {/* <button onClick={props.handleClick}>
        {props.currentPage === "signup" ? "Log In" : props.currentPage === "login" ? "" : "Logout"}
        </button> */}
      {location.pathname === "/signup" ? <Link to="/login">Log in</Link> : location.pathname === "/notes" ? <Link to="/signup">Log out</Link> :null}
      </div>

    )
}
