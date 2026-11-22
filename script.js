
let lucky_num;
let attempts = 0;
let gameOver = false;

const guessForm = document.getElementById("guessForm");
const guessInput = document.getElementById("guessInput");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const resetBtn = document.getElementById("resetBtn");
const numberBox = document.querySelector(".number-box span");
const guessBtn = document.querySelector(".guess-btn");

// Start New Game
function play_game() {

    lucky_num = Math.floor(Math.random() * 50) + 1;

    attempts = 0;
    gameOver = false;

    attemptsDisplay.innerText = attempts;
    message.innerText = "Let's see your luck! ✨";

    numberBox.innerText = "?";

    guessInput.value = "";
    guessInput.disabled = false;
    guessBtn.disabled = false;

    guessInput.focus();
}

// Check Guess
guessForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (gameOver) return;

    let user_num = Number(guessInput.value);

    if (!Number.isInteger(user_num) || user_num < 1 || user_num > 50) {
        message.innerText = "Enter a number between 1 and 50!";
        return;
    }

    attempts++;

    attemptsDisplay.innerText = attempts;

    if (user_num === lucky_num) {

        message.innerText = "🎉 You Won! Game Over!!";

        numberBox.innerText = lucky_num;

        gameOver = true;

        guessInput.disabled = true;
        guessBtn.disabled = true;

    }

    else if (user_num < lucky_num) {

        message.innerText = "📉 Too Low! Try a Higher Number.";

    }

    else {

        message.innerText = "📈 Too High! Try a Lower Number.";

    }

    guessInput.value = "";

    guessInput.focus();

});

// Reset Game
resetBtn.addEventListener("click", function() {

    play_game();

});

// Initialize Game
play_game();
