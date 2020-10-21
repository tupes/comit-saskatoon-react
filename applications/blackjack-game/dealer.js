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

function playDealerHand(deck, dealer) {
	console.log("Playing the dealer's hand...");
}

function settleBets(player, dealer) {
	console.log("Settling the player's bets...");
}

function discardHand(player) {
	player.hand = [];
}

module.exports = {
	dealHand,
	dealCard,
	playDealerHand,
	settleBets,
	discardHand,
}
