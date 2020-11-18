import React, { useState, useEffect} from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import {useLocation } from "react-router-dom";
import { getNotes,getNavItems } from "../firebase/repository";
import axios from "axios";
import Header from "./Header";
import Nav from "./Nav";
import Aside from "./Aside";
import Note from "./Note";
import Signup from "./Signup";
import Login from "./Login";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "../firebase/auth";

const SERVER_URL = "http://localhost:4000";

export default function App() {
  const location = useLocation();
  const history=useHistory();
  // const [currentPage, setCurrentPage] = useState("signup");
    //console.log(navitems)

    const [currentError, setCurrentError] = useState(null);
    const [user, setUser] = useState({isLoggedIn :false, userName:'',uid: null,});

    const [notes, setNotes] = useState([]);
    const [navitems, setNavItems] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [selectedNavItem, setSelectedNavItem] = useState("home");

    const handleNavItemClick = (navItem) => {
        setSelectedNavItem(navItem);
        document.write(selectedNavItem);
      };

      useEffect(() => {
        // const getNotes = async () => {
        //   const response = await axios.get(`${SERVER_URL}/notes`);
        //   setNotes(response.data);
        // };
        const fetchNotes = async () => {
          const notes = await getNotes();
          setNotes(notes);
          console.log(notes)
        };
        
        // const getNavItems = async () => {
        //   const response = await axios.get(`${SERVER_URL}/navitems`);
        //   setNavItems(response.data);
        //   //console.log(response.data.name);
        // };


        const fetchNavItems = async () => {
          const navitems = await getNavItems();
          setNavItems(navitems);
          console.log(navitems)
        };

        const getAuthors = async () => {
          const response = await axios.get(`${SERVER_URL}/authors`);
          setAuthors(response.data);
          //console.log(authors[0].userName);
        };
    
        //getNotes();
        fetchNavItems();
        getAuthors();
        fetchNotes();
      }, []);


      const handleSubmitSignUp = async (event, email, password) => {
        event.preventDefault();
        try {
          const authUser = await createUserWithEmailAndPassword(email, password);
          console.log(authUser);
          setUser({ ...user, isLoggedIn: true,userName:email, uid: authUser.user.uid });
          setCurrentError(null);
          history.push("/login");
        } catch (error) {
          setCurrentError(error);
        }
      };

      const handleSubmitLogin = async (event, email, password) => {
        //document.write(data.username);
        event.preventDefault();
        // const response = await axios.put(`${SERVER_URL}/authors/1`, {isLoggedIn: true,userName:data.username});
        //   if (response.status < 400) {
        //       setUser({isLoggedIn: true,userName:data.username});
        //       //setCurrentPage("note");
        //       history.push("/notes");
              
        // } else {
        //     console.log(response);
        //   }

        try {
          const authUser = await signInWithEmailAndPassword(email, password);
          console.log(authUser);
          setUser({ isLoggedIn: true, userName:email, uid: authUser.user.uid });
          setCurrentError(null);
          history.push("/notes");
        } catch (error) {
          setCurrentError(error);
        }
      };

    return (
      
        <div class="container">
          <Header/>
          <Nav  navitems={navitems} handleNavItemClick={handleNavItemClick}/>

          <Switch>
          <Route path="/notes" render={() => <Note note={ notes[0]} author={  user.userName}/>}></Route>
          <Route path="/signup" render={() => (<Signup error={currentError} handleSubmit={handleSubmitSignUp} ></Signup> )}></Route>
          <Route path="/login" render={() => <Login  error={currentError} handleSubmit={handleSubmitLogin}/>}></Route>
          <Redirect to="/signup" />
          </Switch>

           {location.pathname === "/notes" ? <Aside/>  : null}
        </div>
    )
}
