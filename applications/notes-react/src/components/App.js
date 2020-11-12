import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Header from "./Header";
import Nav from "./Nav";
import Aside from "./Aside";
import Note from "./Note";
import { getNote } from '../data';
import { getAuthor } from '../data';
import { getNavItems } from '../data';
import Signup from "./Signup";
import Login from "./Login";

const SERVER_URL = "http://localhost:3000";

export default function App() {

    //const note=getNote();
    //const author=getAuthor();
    //const navitems=getNavItems();
    const [currentPage, setCurrentPage] = useState("signup");
    //console.log(navitems)
    const [user, setUser] = useState('');

      const [notes, setNotes] = useState([]);
      const [navitems, setNavItems] = useState([]);
      const [authors, setAuthors] = useState([]);
      

    const [selectedNavItem, setSelectedNavItem] = useState("home");
    
    const handleLoginClick = () => {
        
        if (currentPage === "signup") {
            setCurrentPage("login");
          } else {
            setCurrentPage("signup");
          }
      };
      

    const handleNavItemClick = (navItem) => {
        setSelectedNavItem(navItem);
        //document.write(navItem);
      };

     
       
    

      useEffect(() => {
        const getNotes = async () => {
          const response = await axios.get(`${SERVER_URL}/notes`);
          setNotes(response.data);
        };
        
        const getNavItems = async () => {
          const response = await axios.get(`${SERVER_URL}/navitems`);
          setNavItems(response.data);
          //console.log(response.data.name);
        };

        const getAuthors = async () => {
          const response = await axios.get(`${SERVER_URL}/authors`);
          setAuthors(response.data);
          //console.log(authors[0].userName);
        };
    
        getNotes();
        getNavItems();
        getAuthors();
      }, []);

      const handleSubmitLogin = async (event, data) => {
        //document.write(data.username);
        console.log(data.password);
        event.preventDefault();
        const response = await axios.put(`${SERVER_URL}/authors/1`, {isLoggedIn: true,userName:data.username});
          if (response.status < 400) {
              setUser(data.username);
              setCurrentPage("note");
        } else {
            console.log(response);
          }
      };

    return (
      
        <div class="container">
            <Header currentPage={currentPage}
              isLoggedIn={user.isLoggedIn}
              handleClick={handleLoginClick}/>
            <Nav currentPage={currentPage} navitems={navitems} handleNavItemClick={handleNavItemClick}/>
            {currentPage === "signup" ? (
            <Signup/>
             ) : currentPage === "login" ?(<Login handleSubmit={handleSubmitLogin}/>):(
            <Note note={notes[0]} author={user}/>  )}
            
            {currentPage === "signup" || currentPage==="login"? (
              <></>
             ) : (
            <Aside currentPage={currentPage}/>  )}
        </div>
    )
}
