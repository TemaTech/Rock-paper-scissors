// By Chernysh Artem.

const showPlayerScore = document.querySelector('#player-score')
const showCompScore = document.querySelector('#pc-score')
const showPlayerChoice = document.querySelector('.choice-player')
const showCompChoice = document.querySelector('.choice-pc')
const showPlayedRounds = document.querySelector('.played-rounds')

const buttons = document.querySelectorAll('.weapons button')
const weaponsBox = document.querySelector('.weapons')
const playBox = document.querySelector('.playing-box')
const titlePlay = document.querySelector('.title-play h2')



// Adding poing to winner of the round

let playerScore = 0;
let computerScore = 0;

function addPoint() {
    if (playerChoice === compChoice) {
        return showPlayerChoice.textContent = "It's a tie!",
        showCompChoice.textContent = "It's a tie!";
    } else if ((playerChoice === 'paper' && compChoice === 'rock') || (playerChoice === 'rock' && compChoice === 'scissors') || (playerChoice === 'scissors' && compChoice === 'paper')) {
        playerScore += 1;
        return playerScore;
    } else {
        computerScore += 1;
        return computerScore;
    }
}


// Function that chooses randomly rock, paper or scissors, and returns it.
let compChoice;
function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * options.length);
    let computerChoice = options[random];
    return compChoice = computerChoice;
}

// Update score

let roundsPlayed = 0;
function updateScore() {
    showPlayerChoice.textContent = playerChoice;
    showCompChoice.textContent = getComputerChoice();
    addPoint();
    console.log(playerScore + ' : ' + computerScore);
    showPlayerScore.textContent = playerScore;
    showCompScore.textContent = computerScore;
    return roundsPlayed += 1;
}

// Update rounds counter

function updateRoundsCounter() {
    return showPlayedRounds.textContent = roundsPlayed;
}


// Decide result of game
let decision = '';
function decideResult() {
    if (playerScore === computerScore) {
        decision = "It's a tie."
        return decision;
    } else if (playerScore > computerScore) {
        decision = "You won!"
        return decision;
    } else if  (computerScore > playerScore) {
        decision = "You lost."
        return decision;
    } else {
        decision = 'Something went wrong'
        return decision;
    }
}

// Change displaying of playing area

function changeDisplay() {
    decideResult();
    titlePlay.textContent = `${decision}`;
    weaponsBox.remove(buttons);
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Play Again'
    restartButton.classList.add('restart-button')
    restartButton.addEventListener('click', () => {
        window.location.reload();
    })
    playBox.appendChild(restartButton);
}



// Stop playing after 5th round

function finishGame() {
    if (roundsPlayed > 4) {
        changeDisplay();
    } 
}



// Getting choice of player and saving that.

let playerChoice;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        updateScore();
        updateRoundsCounter();
        finishGame();
    })
})