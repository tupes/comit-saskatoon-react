import React, { Component } from 'react';
import {createCards} from "../js/cards.js";
import {soundGame} from "../js/sound.js";

class DivImageCard extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            isOnDeck:true,
            isShowed:false,
            cardName:"--"
        };
        
    }
        
    flipCard = () => {
        if (!window.$isGameFinish && !window.$isGameOver && !this.state.isShowed){
            if (!window.$isTimerStart){//The first click will start Clock Memo
                window.$isTimerStart = true;
            };
            
            if (window.$flippedCards.length<2){
                this.setState((state) => ({isShowed: !(state.isShowed)}));
                //Solution for asychronoun setState --> re-render each component
                window.$flippedCards.push(this.props.cardName);
                window.$thisSetStates.push(this);
                soundGame("Flip a card");
                if (window.$flippedCards.length===2){
                    //Check the pair of flipped cards 
                    let card1 = window.$flippedCards[0];
                    let card2 = window.$flippedCards[1];
                    if (card1[0]===card2[0]){
                        const suitsCheck = card1[1]+card2[1];
                        const suitPairs =["DH", "HD", "CS", "SC"];
                        if (suitPairs.includes(suitsCheck)){
                            window.$isPairCards = true;
                        }else{window.$isFlipBackPairCards = true}
                    }else{window.$isFlipBackPairCards = true}
                }
            }
        }
    } 
        

    render() {
        if (window.$isNewShuffle){
            //After login or restart 
            this.setState((state) => (
                     {isShowed: false,
                      isOnDeck: true,   
                     }
                 )
            );
            
            if (this.props.cardNumber>=51){
                //the last card on the deck has been re-shuffled 
                window.$isNewShuffle=false; 
            }
            return(
                <div>
                    <img className="imageCard"
                         src="../images/back.png"
                         alt="back"
                         onClick={this.flipCard}
                    /> 
                </div>
             )
        }
        else{                
            if (!this.state.isOnDeck) {
                    return(
                    <div>
                        <img    className="imageGoodJob"
                                src="../images/goodjob.png"
                                alt="goodjob"
                        /> 
                    </div>
                    )
                } 
                else{
                    if (!this.state.isShowed) {
                        return(
                        <div>
                            <img    className="imageCard"
                                    src="../images/back.png"
                                    alt="back"
                                    onClick={this.flipCard}
                            /> 
                        </div>
                        )
                    }
                    else{
                        let scr = '../images/'+this.props.cardName+'.png';
                        return(
                            <div>
                                <img    className="imageCard" 
                                        src={scr}
                                        alt={this.props.cardName}
                                        onClick={this.flipCard}
                                /> 
                            </div>
                        )
                    }       
                }    
            }
    }        
}

function DeckMemo() {
    let cards = createCards();
    soundGame("Shuffle cards");
    return(
            <div className="gridDeck">
                {cards.map((element,i) => (
                    <DivImageCard cardNumber={i} cardName={element}/>
                ))}
            </div>
        )
    
} 

export default DeckMemo;




