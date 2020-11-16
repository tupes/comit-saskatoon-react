import React, { useState, useEffect} from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import {useLocation } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Nav from "./Nav";
import Aside from "./Aside";
import Note from "./Note";
import Signup from "./Signup";
import Login from "./Login";

const SERVER_URL = "http://localhost:4000";

export default function App() {
  const location = useLocation();
  const history=useHistory();
  // const [currentPage, setCurrentPage] = useState("signup");
    //console.log(navitems)
    const [user, setUser] = useState({isLoggedIn :false, userName:''});

    const [notes, setNotes] = useState([]);
    const [navitems, setNavItems] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [selectedNavItem, setSelectedNavItem] = useState("home");

    const handleNavItemClick = (navItem) => {
        setSelectedNavItem(navItem);
        document.write(selectedNavItem);
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
        event.preventDefault();
        const response = await axios.put(`${SERVER_URL}/authors/1`, {isLoggedIn: true,userName:data.username});
          if (response.status < 400) {
              setUser({isLoggedIn: true,userName:data.username});
              //setCurrentPage("note");
              history.push("/notes");
              
        } else {
            console.log(response);
          }
      };

    return (
      
        <div class="container">
          <Header/>
          <Nav  navitems={navitems} handleNavItemClick={handleNavItemClick}/>

          <Switch>
          <Route path="/notes" render={() => <Note note={ {
          "id": 1,
          "name": "Books to Read",
          "note_items": [
            "There There by Tommy Orange",
            "Let's Go(So We Can Get Back) by Jeff tweedy",
            "Hello World: Being Human in the Age of Algorithms by Hannah Fry",
            "Can't Stop Won't Stop by Jeff Chang",
            "Less by Andrew Sean Greer",
            "Educated by Tara Westover",
            "Grit by Angela Duckworth",
            "See you in the Cosmos by Jack Cheng",
            "Just Kids by Patti Smith",
            "Arbitrary Stupid Goal by Tamara Shopsin"
          ],
          "author_id": 1,
          "date": "Nov 11th 2019"
        }} author={  user.userName}/>}></Route>
          <Route path="/signup" render={() => <Signup/>}></Route>
          <Route path="/login" render={() => <Login handleSubmit={handleSubmitLogin}/>}
          ></Route>
          <Redirect to="/signup" />
          </Switch>

           {location.pathname === "/notes" ? <Aside/>  : null}
        </div>
    )
}
