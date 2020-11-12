import React from 'react'

export default function Header(props) {
    return (
      
      <div className="page-header">
        <img src="../imgs/favicon.ico" alt=""/>
        <h1 >Notedly</h1>
        {props.currentPage !== "login" ?(<button onClick={props.handleClick}>
        {props.currentPage === "signup" ? "Log In" :  "Logout"}
        </button>):(<></>)}
        {/* <button onClick={props.handleClick}>
        {props.currentPage === "signup" ? "Log In" : props.currentPage === "login" ? "" : "Logout"}
        </button> */}
      </div>

    )
}
