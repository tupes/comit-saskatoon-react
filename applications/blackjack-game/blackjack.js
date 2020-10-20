const { getHandTotal, displayHand } = require('./playerHand.js');
const { createDeck } = require('./deck.js');
const { createPlayer } = require('./player.js');
const { dealHand } = require('./dealer');

function startGame() {
	console.log('\n\n');
	console.log('BLACKJACK GAME');

	const player = createPlayer('John', 50.00);
	const deck = createDeck();

	console.log(`Created player ${player.name} with $${player.money}`);
	console.log('Dealing hand...');

	dealHand(deck, player.hand);

	displayHand(player.hand);
	let handTotal = getHandTotal(player.hand);

	console.log(`Player hand total: ${handTotal}`);
}

startGame();