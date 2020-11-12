import React from 'react'

export default function Note(props) {
    const{note,author}=props;
    return (
        <section class="note">
      <header>
        <address>
          <p>by {author.name}</p>
          <date>{note.date}</date>
        </address>
      </header>

      <h1>{note.name}</h1>
      <ul>


      {note.note_items.map((item) => (
          <li key={item}>
            {item}
          </li>          
        )
        )}



        {/*Need to do the logic to identify some of the note items as links
         <li>
          <a href="https://www.amazon.com/Hello-World-Being-Human-Algorithms/dp/039363499X" target="_blank">Hello
            World:
            Being Human in
            the Age of Algorithms</a> by Hannah Fry
        </li> */}
        
      </ul>
      <section id="permalink-section"><a href="">Permalink</a></section>
    </section>
    )
}
