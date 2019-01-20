

console.log("up and running!");

var cards = [
	{
		rank: "Queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "Queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "King",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "King",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
}

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	//this invokes the function
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}

var createBoard = function() {
	for(var i = 0; i < cards.length; i++) {
		//logic here
		var cardElement = document.createElement('img');
		//add a src attribute so user will see back of the card
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();




