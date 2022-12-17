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
		// return "player beats computer";
		console.log("player beats computer");
	if (
		(computerSelection == "rock" && playerSelection == "scissor") ||
		(computerSelection == "paper" && playerSelection == "rock")
	)
		// return "computer beats player";
		console.log("computer beats player");
	else 
		// return "tie no one won";
		console.log("tie no one won");
}

// Write a NEW function called game().
// Call the playRound function inside of this one to
// play a 5 round game that keeps score and reports a winner or loser at the end.

function game() {
	let userPoints = 0,
		computerPoints = 0;

	let userChoice = prompt("choose one");
	let resultOfPlayRound = playRound(userChoice, getComputerChoice());
	if (resultOfPlayRound == "player beats computer") userPoints++;
	if (resultOfPlayRound == "computer beats player") computerPoints++;
	console.log(resultOfPlayRound);

	if (computerPoints > userPoints) console.log("Computer won");
	else console.log("User won");
}

// console.log(game());

// selection buttons
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const selectionBtns = [...document.querySelectorAll(".selection-buttons button")];
/* selectionBtns.forEach(button => {
	button.addEventListener('click', playRound(button.id, getComputerChoice()), {once: true})
	console.log(this);
}) */
selectionBtns.forEach(button => {
	button.addEventListener('click', (e) => {
		playRound(e.target.id, getComputerChoice())
		// console.log(e.target.id);
	})
	
})