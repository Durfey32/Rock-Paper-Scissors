let User = 0;
let Computer = 0;

function getComputerChoice() {

const Game = ['R', 'P', 'S'];
const Random = Math.floor(Math.random() * Game.length);
const Choice = Game[Random];
return Choice;
} getComputerChoice();

function round() {
    let computerChoice = getComputerChoice();
    let playerDecision = prompt('Rock-Paper-Scissors!', ''.toLowerCase());

    if (playerDecision === 'R' && computerChoice === 'S') {
        User += 1;
        alert('User Wins')
    } else if (playerDecision === 'S' && computerChoice === 'P') {
        User += 1;
        alert('User Wins');
    } else if (playerDecision === 'P' && computerChoice === 'R') {
        User += 1;
        alert('User Wins')
    } else if (playerDecision === 'R' && computerChoice === 'P') {
        User += 1;
        alert('Computer Wins')
    } else if (playerDecision === 'S' && computerChoice === 'R') {
        User += 1;
        alert('Computer Wins')
    } else if (playerDecision === 'P' && computerChoice === 'S') {
        User += 1;
        alert('Computer Wins')
    }
    
} round();

