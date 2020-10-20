function getHandTotal(hand) {
	return Number(hand[0].rank) + Number(hand[1].rank);	
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