const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
const SUITS = ['C', 'D', 'H', 'S'];


function shuffleArray(array){
	for (let i = array.length - 1; i > 0; i--) {  
		// Generate random number  
		let j = Math.floor(Math.random() * (i + 1)); 
		let temp = array[i]; 
		array[i] = array[j]; 
		array[j] = temp; 
	} 
	return array; 
}

export function createCards() {
	const cards = [];
	for (let rank of RANKS) {
		for (let suit of SUITS) {
			const card = rank+suit;
			cards.push(card);
		}
	}
	//return shuffleArray(cards);
	return cards;
}

export function removeCardFromDeck(){
	let this1 = window.$thisSetStates.pop();
	let this2 = window.$thisSetStates.pop();
	this1.setState((state) => ({isOnDeck: false}));
	this2.setState((state) => ({isOnDeck: false}));
	window.$isPairCards = false;
	window.$flippedCards = [];
	window.$numberCardsOnDeck -=2;
} 

export function flipBackPairCards(){
	let this1 = window.$thisSetStates.pop();
	let this2 = window.$thisSetStates.pop();
	this1.setState((state) => ({isShowed: false}));
	this2.setState((state) => ({isShowed: false}));
	window.$isPairCards = false;
	window.$isFlipBackPairCards = false;
	window.$flippedCards = [];
} 
