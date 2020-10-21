const prompt = require('prompt-sync')({ sigint: true });

const { getHandTotal, getHandDisplay } = require('./playerHand.js');

function displayGameStart() {
	console.log('\n\n');
	console.log('STARTING A NEW GAME OF BLACKJACK');
}

function displayRoundStart() {
	console.log('\n');
	console.log('Dealing a new round...');
}

function displayPlayer(player) {
	console.log(`Created player ${player.name} with $${player.money}`);
}

function displayHand(player) {
	console.log(`${player.name} hand: ${getHandDisplay(player.hand)}`);
	console.log(`${player.name} hand total: ${getHandTotal(player.hand)}`);
}

function displayHandBusted() {
	console.log('Bust!');
}

function displayStand(handTotal) {
	console.log(`Standing with a ${handTotal}`);
}

function displayGameEnd() {
	console.log('\n');
	console.log('Thanks for playing!');
}

function getPlayRoundSelection() {
	return prompt('Play a round? ');
}

function getPlayerAction() {
	return prompt('Select an action ("h", "s"): ');
}

module.exports = {
	displayGameStart,
	displayRoundStart,
	displayPlayer,
	displayHand,
	displayHandBusted,
	displayStand,
	displayGameEnd,
	getPlayRoundSelection,
	getPlayerAction
}