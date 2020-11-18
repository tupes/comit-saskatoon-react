import DivImageCard from "../components/DivImageCard.jsx";
import {createCards} from "../js/cards.js";
import {soundGame} from "../js/sound.js";
    
function DeckMemo() {
    
    let cards = createCards(window.$cardsTotal);
    soundGame("Shuffle cards");
    return(
            window.$cardsTotal === 52 ?
                <div className="divgrid-full-deck">
                    {cards.map((element,i) => (
                        <DivImageCard cardNumber={i} cardName={element}/>
                    ))}
                </div>
            :   <div className="divgrid-easy-deck">
                    {cards.map((element,i) => (
                        <DivImageCard cardNumber={i} cardName={element}/>
                    ))}
                </div>
            
    )
} 

export default DeckMemo;




