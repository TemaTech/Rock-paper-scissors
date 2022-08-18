// By Chernysh Artem.
// Function that chooses randomly rock, paper or scissors, and returns it.
function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * options.length);
    let computerChoice = options[random];
    return computerChoice;
}

let result;

// Function that plays single round.
function playRound (playerSelection, computerSelection) {
    // variants of playRound:
    //if player chose rock:
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return result = "It's a tie.";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return result = "Player lost.";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return result = "Player won!";
    } // if player chose paper:
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return result = "It's a tie.";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return result = "Player lost.";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return result = "Player won!";
    } // if player chose scissors:
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return result = "It's a tie.";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return result = "Player lost.";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return result = "Player won!";
    } //else
    else {
        return result = "Something went wrong in playRound().";
    }
}

let inputWeapon;

// Gets weapon of player.
function getInputWeapon() {
    return inputWeapon = prompt('Please enter a weapon to play: ', '');
}

// Function that plays "Rock paper scissors".
function game() {
    getInputWeapon();
    let playerSelection = getInputWeapon();
    getComputerChoice();
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(result);
}

for (let i = 0; i < 5; i++) {
    game();
}