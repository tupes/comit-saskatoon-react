import React, { Component } from 'react';
import {soundGame} from "../js/sound.js";

class DivImageCard extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            isOnDeck:true,
            isShowed:false
        };
        
    }

    componentDidMount() {
        window.$isOnEventDeckChange = false;//Enable mouse click on any cards
    }
    
    componentDidUpdate() {
        //Release Mouse onClick 
        if (window.$isOnEventDeckChange) {
            window.$isOnEventDeckChange = false;
        }
    }
    

    flipCard = () => {
      if (!window.$isOnEventDeckChange) {
        if (!window.$isGameFinish && !window.$isGameOver && !this.state.isShowed){
            if (!window.$isTimerStart){//The first click will start Clock Memo
                window.$isTimerStart = true;
            };
            
            if (window.$flippedCards.length<2){
                this.setState((state) => ({isShowed: !(state.isShowed)}));
                window.$isOnEventDeckChange = true;//Disable mouse clik on card when Deck changing 
                window.$flippedCards.push(this.props.cardName);
                window.$thisSetStates.push(this);
                window.$yourClicks +=1;//counting your clicks to flip a card
                soundGame("Flip a card");
                if (window.$flippedCards.length===2){
                    //Check the pair of flipped cards 
                    let card1 = window.$flippedCards[0];
                    let card2 = window.$flippedCards[1];
                    if (card1[0]===card2[0]){
                        const suitsCheck = card1[1]+card2[1];
                        const suitPairs =["DH", "HD", "CS", "SC"];
                        if (suitPairs.includes(suitsCheck)){
                            window.$isCorrectCards = true;
                        }else{window.$isFlipBackPairCards = true;
                        }
                    }else{window.$isFlipBackPairCards = true}
                }
            }
        }
      }
      else{//Accept click on the next-card during a pair of previous cards on processing
            if (!window.$isNextCard){    
                window.$thisSetStatesNextCard = this;// Keep the handle the next-clicked card
                window.$nextCardName = this.props.cardName;
                window.$isNextCard = true;
            }
      } 
    }    

    render() {
        if (window.$isNewShuffle){
            //Restart Game -- flip back all card on the deck
            //Should change this in new version Memo ---------------  
            this.setState((state) => (
                     {isShowed: false,
                      isOnDeck: true   
                     }
                 )
            );
            
            if (this.props.cardNumber>=(window.$cardsTotal-1)){
                //the last card on the deck has been re-shuffled 
                window.$isNewShuffle=false; 
            }
            //-----------------------------------------------------
            return(
                <div key={this.props.cardName}>
                    <img     
                            className="image-card"
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
                    <div key={this.props.cardName}>
                        <img   
                                className="image-goodjob"
                                src="../images/goodjob.png"
                                alt="goodjob"
                        /> 
                    </div>
                    )
                } 
                else{
                    if (!this.state.isShowed) {
                        return(
                        <div key={this.props.cardName}>
                            <img    
                                    className="image-card"
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
                            <div key={this.props.cardName}>
                                <img    
                                        className="image-card" 
                                        src={scr}
                                        alt={this.props.cardName}
                                /> 
                            </div>
                        )
                    }       
                }    
            }
    }        
}

export default DivImageCard;