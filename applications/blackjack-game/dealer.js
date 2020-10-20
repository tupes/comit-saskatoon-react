const { addCard } = require('./playerHand.js');
const { drawCard } = require('./deck.js');

function dealCard(deck, hand) {
	const card = drawCard(deck);
	addCard(hand, card);
}

function dealHand(deck, hand) {
	dealCard(deck, hand);
	dealCard(deck, hand);
}

module.exports = {
    dealHand
}
