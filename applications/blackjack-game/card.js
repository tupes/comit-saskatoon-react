function getCardValue(card) {
    if (card.rank === 'A') {
        return 11;
    } else if (['T', 'J', 'Q', 'K'].includes(card.rank)) {
        return 10;
    }
    return Number(card.rank);
}

function displayCard(card) {
	let cardDisplay = `${card.rank}${card.suit}`;
	console.log(`Player hand: ${cardDisplay}`);	
}

module.exports = {
    getCardValue,
    displayCard,
}