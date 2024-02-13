function getRandomInt(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function setDifficulty(difficulty) {
    if (difficulty === "Easy") {
        return getRandomInt(1, 25);
    } else if (difficulty === "Medium") {
        return getRandomInt(1, 50);
    } else {
        return getRandomInt(1, 100);
    }
}

function mainGame() {
    let attempts = 0
    alert("Easy: entre 1 et 25\nMedium: entre 1 et 50\nHard: entre 1 et 100");
    let difficulty = document.getElementById("difficulty").value;
    let target = setDifficulty(difficulty);
    let guess;
    do {
        guess = parseInt(prompt("Enter a number!"), 10);
        attempts++
        if (guess > target) {
            alert("Your guess is greater than the target!");
        } else if (guess < target) {
            alert("Your guess is less than the target!");
        }
    } while (guess !== target);
    alert("Good job! \nYou guessed in: " + attempts + " attempts");
    let playAgain = confirm("Want to play again?");
    if (playAgain) {
        mainGame();
    }
}
