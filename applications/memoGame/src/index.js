import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {readFromDatabase } from './js/accessFirebase';

//Global variables--------------
window.$cardsTotal = 16;//Full Ranks --> total: 52; Easy Ranks total: 8
window.$isNewShuffle = true;//Set true to control restart all cards on the deck      
window.$isTimerStart = false;//Only start after first click on any card    
window.$isGameOver = false;//Over limit time
window.$isGameFinish = false;//When all cards on the deck are flipperd
window.$timeLimit = "10:00";//Limit time minutes:seconds
window.$yourName ="";//Name of the player
window.$yourClicks=0;//Your clicks on the cards
window.$yourCount = 0;//in seceonds
window.$topScores =[];
window.$topScoresEasy =[]; 
window.$numberCardsOnDeck = window.$cardsTotal;
window.$forceUpdateTopScores = {};//Use to call function inside TopScoresMemo to force re-rendering  
window.$flippedCards = [];
readFromDatabase(1,3,window.$topScores,'/topscores/', window.$fbDatabase);
readFromDatabase(1,3,window.$topScoresEasy,'/topscoreseasy/', window.$fbDatabase);
window.$isTopScoresChanged = false;
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
