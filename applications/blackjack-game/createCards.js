export const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
export const SUITS = ['C', 'D', 'H', 'S'];

export function createCards() {
	const cards = [];
	for (let rank of RANKS) {
		for (let suit of SUITS) {
			const card = { rank, suit };
			cards.push(card);
		}
	}
	return cards;
}

export function shuffleArray(array){
	let i,j,temp = 0;
	for (i = array.length - 1; i > 0; i--) {  
		// Generate random number  
		j = Math.floor(Math.random() * (i + 1)); 
		temp = array[i]; 
		array[i] = array[j]; 
		array[j] = temp; 
	} 
	return array; 
} 
