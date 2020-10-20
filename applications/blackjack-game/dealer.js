const { addCard } = require('./playerHand.js');
const { drawCard } = require('./deck.js');

function dealCard(deck, hand) {
	const card = drawCard(deck);
	addCard(hand, card);
}

function dealHand(deck, playerHand, dealerHand) {
	dealCard(deck, playerHand);
	dealCard(deck, dealerHand);
	dealCard(deck, playerHand);
}

module.exports = {
    dealHand
}
