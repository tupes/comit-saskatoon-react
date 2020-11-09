import {removeCardFromDeck, flipBackPairCards} from "../js/cards.js";
import {soundGame} from '../js/sound.js';
import { updateTopScores } from '../js/score';

export function eventsProcess() {
    //Have just started Game Memo
    if (window.$isTimerStart){
        if (!window.$isOnEventDeckChange){
            //If you have just flipped a correct card 
            if (window.$isCorrectCards) {
                    window.$isOnEventDeckChange = true;//Disable mouse click when remove cards
                    window.$delayCount = 1;
            }
            else
            {   //If you have just flipped a wrong card
                if (window.$isFlipBackPairCards){
                    window.$isOnEventDeckChange = true;//Disable mouse click when flip-back cards
                    window.$delayCount = 1;
               
                }
                else{
                    //If you have just finished all cards on the deck - Well done 
                    if (window.$numberCardsOnDeck===0){
                        soundGame("Well done");
                        window.$isTimerStart = false;
                        window.$isGameFinish = true;
                        //update TopScores
                        updateTopScores(window.$yourName,window.$yourCount,window.$topScores);
                        //Call function inside TopScoresMemo to force re-rendering
                        window.$forceUpdateTopScores();                              
                    }

                }
            }



        }else{
            if (window.$isNextCard || window.$delayCount === 200 || window.$delayCount === 500 ){
                if (window.$isCorrectCards){
                    window.$delayCount = 0;
                    removeCardFromDeck();
                }else{
                    if (window.$delayCount === 200) { window.$delayCount = 201} //By pass 200 --> 500
                    else{
                        if (window.$isFlipBackPairCards){
                            window.$delayCount = 0;
                            flipBackPairCards();
                            window.$delayCount = 0;
                            soundGame("Flip a card");
                        }
                    } 
                }
            }else{
                window.$delayCount += 1;
                if (window.$delayCount ===50){
                    if (window.$isCorrectCards) {soundGame("Correct card");}
                    if (window.$isFlipBackPairCards){soundGame("Wrong card");}
                }
            }

        }    
    }
}