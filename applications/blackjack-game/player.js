function createPlayer(name, money = 100.00) {
	return {
		name,
		money,
		hand: [],
	}
}

module.exports = {
    createPlayer
}