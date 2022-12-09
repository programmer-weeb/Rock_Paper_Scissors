console.log("hello from external js file");

// Your game is going to play against the computer, so begin with a function called getComputerChoice
// that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function getComputerChoice() {
	let values = ["Rock", "Paper", "Scissors"];
	let randomIndex = Math.floor(Math.random() * values.length);
	return values[randomIndex];
}

// Write a function that plays a single round of Rock Paper Scissors.
// The function should take two parameters - the playerSelection and computerSelection - and
// then return a string that declares the winner

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLocaleLowerCase();
	computerSelection = computerSelection.toLocaleLowerCase();

	if (
		(playerSelection == "rock" && computerSelection == "scissor") ||
		(playerSelection == "paper" && computerSelection == "rock")
	)
		return "player beats computer";
	if (
		(computerSelection == "rock" && playerSelection == "scissor") ||
		(computerSelection == "paper" && playerSelection == "rock")
	)
		return "computer beats player";
	else return "tie no one won";
}

console.log(playRound('paper', 'paper'));