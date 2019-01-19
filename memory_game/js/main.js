

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

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	//this invokes the function
	checkForMatch();
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}

flipCard(0);

flipCard(2);



