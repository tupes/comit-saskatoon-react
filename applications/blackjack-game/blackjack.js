const { getHandTotal, displayHand } = require('./playerHand.js');
const { createDeck, displayDeck } = require('./deck.js');
const { createPlayer } = require('./player.js');
const { dealHand } = require('./dealer');

function startGame() {
	console.log('\n\n');
	console.log('BLACKJACK GAME');

	const player = createPlayer('John', 50.00);
	const dealerHand = [];
	const deck = createDeck();
	displayDeck(deck);

	console.log(`Created player ${player.name} with $${player.money}`);
	console.log('Dealing hand...');

	dealHand(deck, player.hand, dealerHand);

	displayHand(player.hand);
	displayHand(dealerHand);
	let handTotal = getHandTotal(player.hand);

	console.log(`Player hand total: ${handTotal}`);
}

startGame();
