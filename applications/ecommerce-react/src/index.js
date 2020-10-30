import React from 'react';
import ReactDOM from 'react-dom';

import './styles/app.css';

import { getItems } from './data';

function App() {
  const items = getItems();

  const phoneNumber = '780-555-5556';
  const isLoggedIn = true;
  
  return (
    <div className="container">
      <header className="page-header">
        <h1>Sports Store</h1>
        <button><a href="pages/signup.html">{isLoggedIn ? 'Log out' : 'Log in'}</a></button>
      </header>

      <ul className="nav-links">
        <li>
          <button><a href="pages/watersports.html">Watersports</a></button>
        </li>
        <li>
          <button><a href="pages/soccer.html">Soccer</a></button>
        </li>
        <li>
          <button><a href="pages/basketball.html">Basketball</a></button>
        </li>
        <li>
          <button><a href="pages/hockey.html">Hockey</a></button>
        </li>
        <li>
          <button><a href="pages/Boardgames.html">Boardgames</a></button>
        </li>
      </ul>

      <section className="items">
        <ul className="items-list">
          {items.map((item) => (
            <li key={item.name}>
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
          <div>${item.price}</div>
              <p>{item.description}</p>
              <button className="item">Add To Cart</button>
            </li>          
          )
          )}
        </ul>
      </section>

      <footer className="page-footer">
        <h4>Contact Us</h4>
        <ul>
          <li>
            <a href="mailto:sportsstore@store.com">sportsstore@store.com</a>
          </li>
  <li><a href={`"tel:+01-${phoneNumber}"`}>{phoneNumber}</a></li>
        </ul>
      </footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));