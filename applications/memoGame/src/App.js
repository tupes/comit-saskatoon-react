import React, { useState } from "react";
import logo from './logo.svg';
import StartMemo from './components/StartMemo.jsx';
import MainMemo from './components/MainMemo.jsx';

function App() {
  const [playerName, setPlayerName] = useState("");

  const handleStartClick = (event, name) => {
      //event.preventDefault();
      if (name !==""){
          setPlayerName(name);
          window.$yourName=name;
          window.$numberCardsOnDeck = window.$cardsTotal;
          window.$isOnEventDeckChange = true;//Disable mouse click when shuffle cards
      }else{
          //to setCustomValidity message of <input ... required> 
          document.getElementById("input_name").setCustomValidity("You have to enter a name to start Memo Game");
      }
  }

  return (
    <div className="App"> 
        {playerName === ""    ? <StartMemo logo={logo} handleButtonClick={handleStartClick}/>
                              : <MainMemo logo={logo} playerName={playerName}/>}
    </div>
  );
}

export default App;
