import React, { Component } from 'react';
import {removeCardFromDeck, flipBackPairCards} from "../js/cards.js";
import {soundGame} from '../js/sound.js';

class ClockMemo extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            delay1:0,
            delay2:0
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
        window.$isTimerStart = false;
    }

    tick() {
        //Have just started Game Memo
        if (window.$isTimerStart){
                this.setState({count: this.state.count+1});
                //You have just flipped a correct card 
                if (window.$isPairCards){
                    if (this.state.delay1===0){soundGame("Correct card")} 
                    this.setState({delay1: this.state.delay1+1});
                    if (this.state.delay1===1){removeCardFromDeck()}
                }else{this.setState({delay1: 0});}
                
                //You have just flipped a wrong card
                if (window.$isFlipBackPairCards){
                    if (this.state.delay2===0){soundGame("Wrong card")}
                    this.setState({delay2: this.state.delay2+1});
                    if (this.state.delay2===2){
                        flipBackPairCards();
                        soundGame("Flip a card");
                    }
                }else{this.setState({delay2: 0});}
                
                //You have just finished all cards on the deck - Well done 
                if (window.$numberCardsOnDeck===0){
                    soundGame("Well done");
                    window.$isTimerStart = false;
                    window.$isGameFinish = true;
                    this.setState({count:0});
                    
                    //then, process saving score and adding to Top Score ....
                
                }
        }else{if(!window.$isGameFinish){ //When finished all cards on the deck
                this.setState({count: 0});
            } 
        }
    }

    displayClock(){
        //count in second 
        let minutes = parseInt(this.state.count / 60, 10);//to integer in Decimal
        let seconds = parseInt(this.state.count % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;//add "0" before (0..9) 
        seconds = seconds < 10 ? "0" + seconds : seconds;
        let stringClock = minutes + ":" + seconds;
        window.$yourScore = stringClock;
        if (stringClock===window.$timeLimit){
            //Gameover ....
            soundGame("Game over");
            window.$isTimerStart = false;
            window.$isGameOver = true;
            this.setState({count:0});
        }
        return stringClock;
    }

    render() {
        if (window.$isGameOver){
            return (
                <div className="divGameover">
                    <p>GAME OVER !</p>
                    <span id="gameOver">{window.$timeLimit}</span>
                </div>     
            )
        }
        else{   if(window.$isGameFinish){ //When finished all cards on the deck
                    return (
                        <div className="divFinish">
                            <p>WELL DONE!</p>
                            <span id="gameFinish">{window.$yourScore}</span>
                        </div> 
                    );
                 
                }else{
                    return (
                        <div className="divClock">
                            <p>Your time</p>
                            <span id="clockGame">{this.displayClock()}</span>
                        </div> 
                    );
                }
            }
    }    
}

export default ClockMemo;
