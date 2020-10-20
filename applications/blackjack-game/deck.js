function createDeck() {
	return [
		{
			rank: '9',
			suit: 'h',
		},
		{
			rank: '3',
			suit: 'd',
		}
	]
}

function drawCard(deck) {
	return deck.pop();
}

module.exports = {
    createDeck,
    drawCard
}