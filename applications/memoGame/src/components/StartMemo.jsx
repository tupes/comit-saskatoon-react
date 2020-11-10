import React, { Component } from 'react';
import logo from '../logo.svg';
import MainMemo from '../components/MainMemo.jsx';
import {soundGame} from '../js/sound';


class StartMemo extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            isStarted:false,
            name:""
        };
        
        //ES6 strict mode recommended bind(this) methods 
        //but with arrow functions => don't need bind(this)
        
        //this.onStartClick = this.onStartClick.bind(this);
        //this.onInputNameChange = this.onInputNameChange.bind(this);
    }

    onStartClick = () => {
        if (this.state.name !==""){
            this.setState({isStarted:true});
            window.$yourName = this.state.name;
            window.$isOnEventDeckChange = true;//Disable mouse click when shuffle cards
        }
        else{
            //to setCustomValidity message of <input ... required> 
            document.getElementById("inputName").setCustomValidity("You have to enter a name to start Memo Game");
        }
    }
    
    onInputNameChange = (event) => {
        this.setState({name:event.target.value});
        document.getElementById("inputName").setCustomValidity("");
    } 
    
    onSignOutClick = () => {
        soundGame("Sign out");
        setTimeout(function(){window.location.reload(false)},1600);
    }      
    
    render() {
        if (!this.state.isStarted) {
            return(
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div>    
                        <h1>Memo Game by ReactJS</h1>
                        <h2> - ComIT ReactJS 2020- </h2>
                        <form action="">
                            <input id="inputName" type="text" required
                                title="Click and type your name less than 25 characters"
                                onChange={this.onInputNameChange} 
                                placeholder="Your name hear ..."
                                maxLength="25" 
                            />
                            <button onClick={this.onStartClick}
                                className="startButton" type="submit">
                                Start game 
                            </button>
                        </form>
                    </div>
                </header>
            )
        }
        else{
            return(
                <div>
                    <header className="App-header App_started">
                        <img src={logo} className="App-logo App-logo-started" alt="logo" />
                        <h1>Memo Game</h1>
                        <p className="guide">Click any card to start!. Try your best to memorize the positions of these pair on the deck - likes this pair </p>
                        <img className="guideImage" src="../images/pairofcard.png" alt="pairofcard"/>
                        <div className="divSignOut">
                            <p className="playerName">{this.state.name}</p>
                            <button type="button" onClick={this.onSignOutClick}>Sign Out</button>
                        </div>
                        
                    </header>
                    <MainMemo />
                    <footer><p>Copyright by ComIT 2020</p></footer>
                </div>
            )
        }    
         
    }
}

export default StartMemo;












