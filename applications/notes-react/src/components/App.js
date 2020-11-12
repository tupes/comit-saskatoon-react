import React, { useState, useEffect, useMemo } from "react";

import Header from "./Header";
import Nav from "./Nav";
import Aside from "./Aside";
import Note from "./Note";
import { getNote } from '../data';
import { getAuthor } from '../data';
import { getNavItems } from '../data';
import Signup from "./Signup";

export default function App() {

    const note=getNote();
    const author=getAuthor();
    const navitems=getNavItems();
    const [currentPage, setCurrentPage] = useState("signup");
    //console.log(navitems)
    const [user, setUser] = useState({
        isLoggedIn: false
      });
    
      const handleLoginClick = () => {
        setUser({ isLoggedIn: !user.isLoggedIn })
        if (currentPage === "signup") {
            setCurrentPage("note");
          } else {
            setCurrentPage("signup");
          }
      };
    return (
        <div class="container">
            <Header currentPage={currentPage}
              isLoggedIn={user.isLoggedIn}
              handleClick={handleLoginClick}/>
            <Nav currentPage={currentPage} navitems={navitems}/>
            {currentPage === "signup" ? (
            <Signup/>
             ) : (
            <Note note={note[0]} author={author[0]}/>  )}
            {currentPage === "signup" ? (
              <></>
             ) : (
            <Aside currentPage={currentPage}/>  )}
        </div>
    )
}
