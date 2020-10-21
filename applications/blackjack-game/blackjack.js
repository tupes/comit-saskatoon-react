const prompt = require('prompt-sync')({ sigint: true });

const { getHandTotal, displayHand } = require('./playerHand.js');
const { createDeck, displayCards } = require('./deck.js');
const { createPlayer } = require('./player.js');
const { dealHand, dealCard, bustHand } = require('./dealer');

function isValid(action) {
	return action === 'h' || action === 's';
}

function playRound(deck, player, dealerHand) {
	console.log('Dealing hand...');

	dealHand(deck, player.hand, dealerHand);

	console.log(`Dealer hand: ${displayHand(dealerHand)}`);
	let dealerHandTotal = getHandTotal(dealerHand);
	console.log(`Dealer hand total: ${dealerHandTotal}`);

	let action = null;
	while (true) {
		console.log(`Player hand: ${displayHand(player.hand)}`);
		let handTotal = getHandTotal(player.hand);
		console.log(`Player hand total: ${handTotal}`);
	
		const action = prompt('Select an action ("h", "s"):');
		console.log(action);
		if (action === 's') {
			break;
		} else if (action === 'h') {
			console.log('Hitting');
			dealCard(deck, player.hand);
			if (getHandTotal(player.hand) > 21) {
				bustHand(player);
				break;
			}
		}
	}
}

function startGame() {
	console.log('\n\n');
	console.log('BLACKJACK GAME');

	const player = createPlayer('John', 50.00);
	console.log(`Created player ${player.name} with $${player.money}`);

	const dealerHand = [];
	const deck = createDeck();

	while (true) {
		const selection = prompt('Play a round? ');
		if (selection === 'n') {
			console.log('Thanks for giving us your money!');
			break
		}
		playRound(deck, player, dealerHand);	
	}
}

startGame();