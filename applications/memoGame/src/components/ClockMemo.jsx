import React, { Component } from 'react';
import { soundGame } from '../js/sound';

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
        clearInterval(this.processInSecond);
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

    countToClock (count){
        //count in (second) convert to minutes:seconds format  
        let minutes = parseInt(count / 60, 10);//to integer in Decimal
        let seconds = parseInt(count % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;//add "0" before (0..9) 
        seconds = seconds < 10 ? "0" + seconds : seconds;
        return minutes + ":" + seconds;
    }

    displayClock(){
        if (this.state.count===0){
            return "00:00"
        }else
        {
            let stringClock = this.countToClock(this.state.count) 
            if (stringClock===window.$timeLimit){
                //Gameover ....
                window.$isTimerStart = false;// and this.state.count will be set back to 0
                window.$isGameOver = true;
                soundGame("Game over");
            }
            return stringClock;
        }
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
                            <span id="gameFinish">
                                {this.countToClock(window.$yourCount)}
                            </span>
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
