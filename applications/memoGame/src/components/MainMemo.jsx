import React, { Component } from 'react';
import '../css/main.css';
import HeaderMemo from "../components/HeaderMemo.jsx";
import DeckMemo from "../components/DeckMemo.jsx";
import SidebarMemo from "../components/SidebarMemo.jsx";
import FooterMemo from "../components/FooterMemo.jsx";

import {eventsProcess} from "../js/eventsProcess.js";

class MainMemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRestart:true
        };
    }
    
    componentDidMount() {
        this.timerEventProcess = setInterval(
          () => eventsProcess(),
          1
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerEventProcess);
    }

    restartGame = () =>{
        this.setState((state) => ({isRestart: !(state.isRestart)}));
        //revert isRestart to change state of MainMemo component --> update
        //Reset global variables
        window.$isNewShuffle = true;//Set true to control restart all cards on the deck 
        window.$isTimerStart = false;//Only start after first click on any card
        window.$isGameFinish = false;//When all cards on the deck are flipperd
        window.$isGameOver = false;//Over limit time
        window.$flippedCards = [];
        window.$numberCardsOnDeck = window.$cardsTotal;
        window.$isCorrectCards = false;
        window.$isFlipBackPairCards = false;
        window.$thisSetStates=[];
        window.$yourCount = 0;
        window.$yourClicks=0;
        window.$isOnEventDeckChange = true;//Disable mouse click on the cards
        //------------------------------
    }

    render() { 
        return(
           <div className="main-container"> 
                <HeaderMemo logo={this.props.logo} playerName={this.props.playerName}/>
                <div className="div-deck">
                    <DeckMemo />
                    <SidebarMemo function={this.restartGame}/>
                </div>
                <FooterMemo />
            </div>
        )
    }
}

export default MainMemo;