const TEN_VALUE_CARDS = ['T', 'J', 'Q', 'K'];

function getCardValue(card) {
	if (card.rank === 'A') {
		return 11
	} else if (TEN_VALUE_CARDS.includes(card.rank)) {
		return 10;
	}
	return Number(card.rank);
}

function displayCard(card) {
	return `${card.rank}${card.suit}`;
}

module.exports = {
    getCardValue,
    displayCard,
}