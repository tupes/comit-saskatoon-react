const { getCardValue, displayCard } = require('./card.js');

function getHandTotal(hand) {
	let handValue = 0;
	for (card of hand) {
		handValue += getCardValue(card);
	}
	return handValue;	
}

function displayHand(hand) {
	let handDisplay = '';
	for (card of hand) {
		handDisplay = handDisplay + ' ' + displayCard(card);
	}
	return handDisplay;
}

function addCard(hand, card) {
	hand.push(card);
}

module.exports = {
    getHandTotal,
    displayHand,
    addCard
}