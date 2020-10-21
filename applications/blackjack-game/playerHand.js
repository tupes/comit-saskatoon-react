const { getCardValue } = require('./card.js');

function getHandTotal(hand) {
	let handValue = 0;
	for (card of hand) {
		handValue += getCardValue(card);
	}
	return handValue;	
}

function displayHand(hand) {
	let handDisplay = `${hand[0].rank}${hand[0].suit} ${hand[1].rank}${hand[1].suit}`;
	console.log(`Player hand: ${handDisplay}`);	
}

function addCard(hand, card) {
	hand.push(card);
}

module.exports = {
    getHandTotal,
    displayHand,
    addCard
}