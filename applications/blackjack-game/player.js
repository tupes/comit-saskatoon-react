const { getHandTotal } = require('./playerHand.js');
const { dealCard } = require('./dealer');
const { displayHand, displayHandBusted, getPlayerAction, displayStand } = require('./consoleUserInterface.js');

function createPlayer(name, money = 0.0) {
	return {
		name,
		money,
		hand: [],
	}
}

function playHand(deck, player) {
	let handTotal = getHandTotal(player.hand);
	
	while (true) {	
		const action = getPlayerAction();
		if (action === 's') {
			break;
		} else if (action === 'h') {
			dealCard(deck, player.hand);
			displayHand(player);
			handTotal = getHandTotal(player.hand);
			if (handTotal > 21) {
				displayHandBusted();
				return;
			}
		}
	}

	displayStand(handTotal);
}

module.exports = {
		createPlayer,
		playHand
}