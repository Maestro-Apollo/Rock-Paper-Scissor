let startBtn = document.getElementById('start');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const DRAW = 'DRAW';
const PLAYER_WIN = 'PLAYER WIN';
const COMPUTER_WIN = 'COMPUTER WIN';

const DEFAULT_VALUE = ROCK;

let gameIsRunning = false;

startBtn.addEventListener('click', () => {
    let getPlayerResult = getPlayerChoice();
    let getComputerResult = getComputerChoice();
    console.log('Player choose: ' + getPlayerResult);
    console.log('Computer choose: ' + getComputerResult);
    const winner = selectWinner(getPlayerResult, getComputerResult);
    console.log(winner);
});

function selectWinner(pResult, cResult) {
    if (pResult === cResult) {
        return DRAW;
    } else if (
        (pResult == ROCK && cResult == SCISSOR) ||
        (pResult == PAPER && cResult == ROCK) ||
        (pResult == SCISSOR && cResult == PAPER)
    ) {
        return PLAYER_WIN;
    } else {
        return COMPUTER_WIN;
    }
}

const getPlayerChoice = () => {
    let value = prompt(`Choose ${ROCK}, ${PAPER}, ${SCISSOR}?`, '').toUpperCase();
    if (gameIsRunning) {
        return;
    }
    if (value !== ROCK && value !== PAPER && value !== SCISSOR) {
        alert(`Invalid input we choose ${DEFAULT_VALUE} for you`);
        return DEFAULT_VALUE;
    }
    return value;
};

const getComputerChoice = () => {
    const computerValue = Math.random();
    if (computerValue < 0.36) {
        return ROCK;
    } else if (computerValue < 0.64) {
        return PAPER;
    } else {
        return SCISSOR;
    }
};