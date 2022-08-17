// By Chernysh Artem.


// Function that chooses randomly rock, paper or scissors.
function getComputerChoice() {
    const computerOptions = ['rock', 'paper', 'scissors'];
    let computerChoice;

    const random = Math.floor(Math.random() * computerOptions.length) + 1;

    if (random === 1) {
        return computerChoice = computerOptions[0];
    } else if (random === 2) {
        return computerChoice = computerOptions[1];
    } else if (random === 3) {
        return computerChoice = computerOptions[2];
    } else {
        return console.log('getComputerChoice error: Unknown computerChoice')
    }
}


// Function that plays single round.
function playRound (playerSelection, computerSelection) {
    // variants of playRound:
    //if player chose rock:
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log("It's a tie!");
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('Player lost.');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('Player won!')
    } // if player chose paper:
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log("It's a tie!")
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('Player lost.')
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('Player won!')
    } // if player chose scissors:
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log("It's a tie!")
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('Player lost.')
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('Player won!')
    } //else
    else {
        console.log('Error: something went wrong in "playRound()".')
    }
}

let inputWeapon;

// Gets weapon of player.
function getInputWeapon() {
    return inputWeapon = prompt('Please enter a weapon to play: ', '');
}

const playerSelection = getInputWeapon();
const computerSelection = getComputerChoice();

// Function that plays "Rock paper scissors".
function game() {
    getInputWeapon();
    playRound(playerSelection, computerSelection);
}

// Plays "game()" 5 times.
for (let i = 0; i < 5; i++) {
    game();
}