function createPlayer(name, money = 100.00) {
	return {
		name: name,
		money: money,
		hand: [],
	}
}

function getHandTotal(hand) {
	return Number(hand[0].rank) + Number(hand[1].rank);	
}

function displayHand(hand) {
	let handDisplay = `${hand[0].rank}${hand[0].suit} ${hand[1].rank}${hand[1].suit}`;
	console.log(`Player hand: ${handDisplay}`);	
}

console.log('\n\n');
console.log('BLACKJACK GAME');

const player = createPlayer('John', 50.00);

console.log(`Created player ${player.name} with $${player.money}`);
console.log('Dealing hand...');

const card1 = {
	rank: '9',
	suit: 'h',
}

const card2 = {
	rank: '3',
	suit: 'd',
}

player.hand = [card1, card2];

displayHand(player.hand);
let handTotal = getHandTotal(player.hand);

console.log(`Player hand total: ${handTotal}`);
