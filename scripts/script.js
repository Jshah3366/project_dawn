let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random()*10);
}

const getAbsoluteDistance = (num_1, num_2) => {
    return Math.abs(num_1 - num_2)
}

const compareGuesses = (user, computer, answer) => {
    
    if (user < 0 || user > 9) {
        alert('Choose a number between 0 and 9');
    } else {

    }

    if (getAbsoluteDistance(user, answer) > getAbsoluteDistance(computer, answer)) {
        return false;
    } else {
        return true;
    }

}

const updateScore = (winner) => {
    if (winner === 'human') { 
        humanScore ++;
    } else {
        computerScore ++;
    }
}

const advanceRound = () => {
   currentRoundNumber ++; 
}
