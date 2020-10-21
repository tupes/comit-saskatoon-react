const shuffle = require('shuffle-array');
const { displayCard } = require('./card.js');


const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
const suits = ['c', 'd', 'h', 's'];

function createCards() {
	const cards = [];
	for (rank of ranks) {
		for (suit of suits) {
			const card = { rank, suit };
			cards.push(card);
		}
	}
	return cards;
}

function shuffleCards(cards) {
	return shuffle(cards);
}

function createDeck() {
	const cards = createCards();
	return shuffleCards(cards);
}

function displayCards(cards) {
	for (card of cards) {
		console.log(displayCard(card));
	}
}

function drawCard(deck) {
	return deck.pop();
}

module.exports = {
		createDeck,
		displayCards,
    drawCard
}