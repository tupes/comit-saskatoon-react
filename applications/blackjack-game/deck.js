const shuffle = require('shuffle-array');

const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
const suits = ['c', 'd', 'h', 's'];

function createCards() {
	const cards = []
	for (rank of ranks) {
		for (suit of suits) {
			const card = {rank, suit};
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

function displayDeck(deck) {
	for (card of deck) {
		console.log(`${card.rank}${card.suit}`);
	}
}

function drawCard(deck) {
	return deck.pop();
}

module.exports = {
	createDeck,
	displayDeck,
    drawCard
}