var userWins = 0;
var userTies = 0;
var userLosses = 0;

function getUserChoice() {
    return prompt ("Enter R, P, or S").toUpperCase();
}

function getComputerChoice() {
    var choices = ["R", "P", "S"];
    var random = Math.floor(Math.random() * 3);
    return choices[random];
}

function determineWinner(user, computer) {
    if (user === computer) {
        ++userTies;
        alert("It's a tie!");
    } else if (
        (user === 'R' && computer === 'S') ||
        (user === 'P' && computer === 'R') ||
        (user === 'S' && computer === 'P')
    ) {
        ++userWins;
        alert("You win!");
    } else {
        ++userLosses
        alert("you Lose!");
    }
} 

function playGame() {
    var userChoice = getUserChoice();
    var computerChoice = getComputerChoice();

    var result = determineWinner(userChoice, computerChoice);

    alert("Stats: " + "\n" + "Wins: " + userWins + "\n" + "Losses: " + userLosses + "\n" + "Ties: " + userTies);

    var playAgain = confirm("Play again?");
    if (playAgain) {
        playGame();
    }
}


playGame();