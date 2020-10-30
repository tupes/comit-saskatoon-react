import React, { Component } from 'react';
import logo from '../logo.svg';
import MainMemo from '../components/MainMemo';

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
    
           
    
    render() {
        if (!this.state.isStarted) {
            return(
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div>    
                        <h1>Memo Game by ReactJS</h1>
                        <h2> - ComIT ReactJS 2020- </h2>
                        <form>
                            <input id="inputName" type="text" required
                                title="Click and type your name less than 16 characters"
                                onChange={this.onInputNameChange} 
                                placeholder="Your name hear ..."
                                maxlength="16" 
                            />
                            <button className="startButton" type="submit"
                                onClick={this.onStartClick}>Start game now !
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
                        <h1>Welcome to Memo Game ! </h1>
                        <p className="hello">Hello {this.state.name} ! </p>
                        <p className="guide">Click any card to start and try your best to memorize the position of these pair of cards like this </p>
                        <img className="guideImage" src="../images/pairofcard.png" alt="pairofcard"/>
                    </header>
                    <MainMemo />
                </div>
            )
        }    
         
    }
}

export default StartMemo;










