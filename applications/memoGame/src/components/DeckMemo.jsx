import DivImageCard from "../components/DivImageCard.jsx";
import {createCards} from "../js/cards.js";
import {soundGame} from "../js/sound.js";
    
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




