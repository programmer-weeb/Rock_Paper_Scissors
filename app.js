console.log('hello from external js file');

// Your game is going to play against the computer, so begin with a function called getComputerChoice
// that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function getComputerChoice() {
    let values = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random() * values.length)
    return values[randomIndex]

}
