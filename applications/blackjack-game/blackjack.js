
const player = {
    name: 'Mark',
    money: 100.00,
    cards: []
}

console.log(`Created player ${player.name}`);

console.log('Dealing hand...');

let card1 = {
    rank: '9',
    suit: 'h',
}

player.cards.push(card1);

let card2 = {
    rank: '3',
    suit: 'd',
}

player.cards.push(card2)

console.log(`Player's starting hand: ${player.cards[0].rank}${player.cards[0].suit} ${player.cards[1].rank}${player.cards[1].suit}`);

let handValue = Number(player.cards[0].rank) + Number(player.cards[1].rank);

console.log(`Hand total: ${handValue}`);