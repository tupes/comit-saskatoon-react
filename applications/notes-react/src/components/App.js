import React from 'react'

import Header from "./Header";
import Nav from "./Nav";
import Aside from "./Aside";
import Note from "./Note";
import { getNote } from '../data';
import { getAuthor } from '../data';

export default function App() {

    const note=getNote();
    const author=getAuthor();
    //console.log(note)
    return (
        <div class="container">
            <Header/>
            <Nav/>
            <Note note={note[0]} author={author[0]}/>
            <Aside/>
        </div>
    )
}
