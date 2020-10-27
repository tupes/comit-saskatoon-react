import {RANKS, SUITS, createCards, shuffleArray } from "./createCards.js";

export function createDeck() {
    let tb = document.getElementById("tableDeck"); 
    if (tb != null){
        tb.remove();// if table has already created --> remove    
    }
    // Add new table with id="tableDeck"
    tb = document.createElement("TABLE");
    tb.setAttribute("id", "tableDeck");
    document.getElementById("divTable").appendChild(tb);
    document.getElementById("deckStatus").innerHTML = "A new set of cards is now on the deck ! Shuffle it before starting new game ! You can click on each card to flip/flop"
    document.getElementById("buttonCreateDeck").innerHTML = "Renew the deck";
    document.getElementById("buttonShuffleCards").style.display="inline-block";
    document.getElementById("optionShowHide").style.display="inline-block";
    document.getElementById("labelShowHide").style.display="inline-block";

    for (let row of SUITS){
        let tR = document.createElement("TR");
        tR.setAttribute("id", row);
        document.getElementById("tableDeck").appendChild(tR);
        for (let column of RANKS) {
            let tD = document.createElement("TD");
            tD.setAttribute("id", column);
            let img = document.createElement("IMG");
            img.setAttribute("id",column+row);
            img.setAttribute("src",`./images/${column}${row}.png`);
            img.setAttribute("alt",`${column}${row}.png`);
            img.setAttribute("onclick","flipflopCard(this)");
            tD.appendChild(img);
            document.getElementById(row).appendChild(tD);
        }
    } 

}

export function shuffleCards() {
    let cards = createCards(); //create Cards
    shuffleArray(cards);
    for (let row of SUITS){
        for (let column of RANKS) {
            let card = cards.pop();
            let filename = card.rank+card.suit+'.png'
            let img = document.getElementById(column+row);
            img.setAttribute("alt",`${filename}`);
            let op = document.getElementById("optionShowHide");
            if (op.checked===true){
                img.setAttribute("src",`./images/${filename}`);
            } 
            else{
                img.setAttribute("src","./images/back.png");
            }
        }
    } 

}

export function flipflopCard(thiscard) {
    let imagelink = thiscard.getAttribute("src");
    if (imagelink === "./images/back.png")
      { //this card is showing it's back  
        let filename = thiscard.getAttribute("alt");
        thiscard.setAttribute("src",`./images/${filename}`);    
      }
    else 
      { //this card is showing up
         thiscard.setAttribute("src","./images/back.png");
      } 
    
}