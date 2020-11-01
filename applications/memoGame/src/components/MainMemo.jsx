import React, { Component } from 'react';
import DeckMemo from "../components/DeckMemo.jsx";
import SidebarMemo from "../components/SidebarMemo.jsx";


class MainMemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRestart:true
        };
    }
    
    restartGame= () =>{
        this.setState((state) => ({isRestart: !(state.isRestart)}));
        //revert isRestart to change state of MainMemo component --> update
        //Reset global variables
        window.$isNewShuffle = true;//Set true to control restart all cards on the deck 
        window.$isTimerStart = false;//Only start after first click on any card
        window.$isGameFinish = false;//When all cards on the deck are flipperd
        window.$isGameOver = false;//Over limit time
        window.$flippedCards = [];
        window.$numberCardsOnDeck = 52;//Can assign 4 in debug process
        window.$isPairCards = false;
        window.$isFlipBackPairCards = false;
        window.$thisSetStates=[];
        
        //------------------------------
    }

    render() { 
        return(
            <div className="divDeck">
                <DeckMemo />
                <SidebarMemo func={this.restartGame}/>
            </div>
        )
    }
}

export default MainMemo;