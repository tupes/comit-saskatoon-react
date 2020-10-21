const { createDeck } = require('./deck.js');
const { createPlayer, playHand } = require('./player.js');
const { dealHand, discardHand, playDealerHand, settleBets } = require('./dealer');
const { displayPlayer, displayGameStart, displayGameEnd, displayRoundStart, displayHand,
	getPlayRoundSelection } = require('./consoleUserInterface.js');

function startGame() {
	displayGameStart();

	const player = createPlayer('John', 100.00);
	const dealer = createPlayer('Dealer');
	const deck = createDeck();

	displayPlayer(player);

	while (true) {
		const selection = getPlayRoundSelection();
		if (selection === 'n') {
			break
		}
		playRound(deck, player, dealer);	
	}

	displayGameEnd();
}

function playRound(deck, player, dealer) {
	displayRoundStart();
	
	dealHand(deck, player.hand, dealer.hand);
	displayHand(player);
	displayHand(dealer);
	
	playHand(deck, player);
	playDealerHand(deck, dealer);
	settleBets(player, dealer);

	discardHand(player);
	discardHand(dealer);
}

startGame();