import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {readFromDatabase } from './accessFirebase';

//Global variables--------------
window.$isNewShuffle = true;//Set true to control restart all cards on the deck      
window.$isTimerStart = false;//Only start after first click on any card    
window.$isGameOver = false;//Over limit time
window.$isGameFinish = false;//When all cards on the deck are flipperd
window.$timeLimit = "10:00";//Limit time minutes:seconds
window.$yourName ="";//Name of the player
window.$yourCount = 0;//in seceonds
window.$topScores =[]; 
window.$numberCardsOnDeck = 52;//52 but can assign 6 in the debug process
window.$forceUpdateTopScores = {};//Use to call function inside TopScoresMemo to force re-rendering  
window.$flippedCards = [];
readFromDatabase(1,3,window.$topScores, window.$fbDatabase);
window.$isCorrectCard = false;
window.$isFlipBackPairCards = false;
window.$thisSetStates=[];//Keep handle 2 components for 2 flipped cards
window.$thisSetStatesNextCard = {};//Keep the handle of the next-clicked card
window.$nextCardName = "";
window.$isNextCard = false; 
window.$isOnEventDeckChange = false;
window.$delayCount = 0;
//-------------------------------
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
