import React, { Component } from 'react';
import DeckMemo from "../components/DeckMemo";
import SidebarMemo from "../components/SidebarMemo";


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
        window.$isNewGame = true;
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