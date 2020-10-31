import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Global variables--------------
window.$isNewShuffle = true;//Set true to control restart all cards on the deck      
window.$isTimerStart = false;//Only start after first click on any card    
window.$isGameOver = false;//Over limit time
window.$isGameFinish = false;//When all cards on the deck are flipperd
window.$timeLimit = "10:00";
window.$yourScore = "00:00";
window.$numberCardsOnDeck = 52;//Can assign 4 in debug process
window.$flippedCards = [];
window.$isPairCards = false;
window.$isFlipBackPairCards = false;
window.$thisSetStates=[];//Keep handle 2 components for 2 flipped cards

//-------------------------------
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
