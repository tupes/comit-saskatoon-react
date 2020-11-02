import {removeCardFromDeck, flipBackPairCards} from "../js/cards.js";
import {soundGame} from '../js/sound.js';

export function eventsProcess() {
    //Have just started Game Memo
    if (window.$isTimerStart){
        
        //If you have just flipped a correct card 
        if (window.$isPairCards && !window.$isOnEventDeckChange){
                soundGame("Correct card");
                window.$isOnEventDeckChange = true;//Disable mouse click when remove cards
                setTimeout(function(){
                    removeCardFromDeck();
                    //window.$isOnEventDeckChange = false;//Re-Enable mouse click 
                    //If you have just finished all cards on the deck - Well done 
                    if (window.$numberCardsOnDeck===0){
                        soundGame("Well done");
                        window.$isTimerStart = false;
                        window.$isGameFinish = true;
                   //then, process saving score and adding to Top Score ....
                    }
                },1000);
        }
        else
        {   //If you have just flipped a wrong card
            if (window.$isFlipBackPairCards && !window.$isOnEventDeckChange){
                window.$isOnEventDeckChange = true;//Disable mouse click when flip-back cards
                soundGame("Wrong card");
                setTimeout(function(){
                    flipBackPairCards();
                    //window.$isOnEventDeckChange = false;//Re-Enable mouse click 
                },2000);
            }
        }
    }
    
}