import React, { Component } from 'react';
import { soundGame } from '../js/sound';
import { scoreToClock } from '../js/score';

class ClockMemo extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            count:0,
        };
    }

    componentDidMount() {
        this.timerInSecond = setInterval(
          () => this.processInSecond(),
          1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerInSecond);
        window.$isTimerStart = false;
    }

    processInSecond() {
        //When the first card has just been clicked -> isTimerStart:true
        if (window.$isTimerStart){
                if(!window.$isGameFinish && !window.$isGameOver){    
                    //clock still run when NOT Game Finish and Not Game Over
                    this.setState({count: this.state.count+1});
                    window.$yourCount = this.state.count; //Game-time is updated and saved
                }
        }
        else{   //setState change to make the last update ClockMemo
                this.setState({count: 0}); 
        } 
    }

    displayClock(){
        if (this.state.count===0){
            return "00:00"
        }else
        {
            let stringClock = scoreToClock(this.state.count) 
            if (stringClock===window.$timeLimit){
                //Gameover ....
                window.$isTimerStart = false;// and this.state.count will be set back to 0
                window.$isGameOver = true;
                soundGame("Game over");
            }
            return stringClock;
        }
    }

    render() {//Conditional Rendering - Game Over - Game Finished - Clock Running
        if (window.$isGameOver){
            return (
                <div className="div-gameover">
                    <p>GAME OVER !</p>
                    <span className="digit-clock" id="clock_gameover">{window.$timeLimit}</span>
                    <br />
                    <label>Your clicks: {window.$yourClicks} </label>
                </div>     
            )
        }
        else{   if(window.$isGameFinish){ //When finished all cards on the deck
                    return (
                        <div className="div-finish">
                            <p>WELL DONE!</p>
                            <span className="digit-clock" id="clock_finish">
                                {scoreToClock(window.$yourCount)}
                            </span>
                            <br />
                            <label>Your clicks: {window.$yourClicks} </label>
                        </div> 
                    );
                 
                }else{ //When the player is playing --> the clock runs
                    return (
                        <div className="div-clock">
                            <p>YOUR TIME</p>
                            <span className="digit-clock" id="clock_game">{this.displayClock()}</span>
                            <br />
                            <label>Your clicks: {window.$yourClicks} </label>
                        </div> 
                    );
                }
            }
    }    
}

export default ClockMemo;
