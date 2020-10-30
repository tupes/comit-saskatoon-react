import React, { Component } from 'react';
import {createCards} from "./createCards.js";

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
        this.setState((state) => ({isShowed: !(state.isShowed)}));
        //Solution for asychronoun setState --> re-render each component
    }
     
        

    render() {
        if (window.$isNewGame){
            //After login or restart 
            //alert(this.props.cardNumber);
            this.setState((state) => (
                     {isShowed: false,
                      isOnDeck: true,   
                      cardName: this.props.cardName   
                     }
                 )
            );
            if (this.props.cardNumber>=51){
                window.$isNewGame=false; //the last card on the deck has been re-shuffled
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
                        <img className="imageCard"
                                src="../images/goodjob.png"
                                alt="goojob"
                        /> 
                    </div>
                    )
                } 
                else{
                    if (!this.state.isShowed) {
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
                        let scr = '../images/'+this.props.cardName+'.png';
                        return(
                            <div>
                                <img  className="imageCard" 
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
    return(
            <div className="gridDeck">
                {cards.map((element,i) => (
                    <DivImageCard cardNumber={i} cardName={element}/>
                ))}
            </div>
        )
    
} 

export default DeckMemo;




