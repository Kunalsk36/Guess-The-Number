function getRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

let guessNumber;
document.getElementById("enterBtn").addEventListener("click", function () {
  guessNumber = document.getElementById("guessNoInput").value;
  afterGuessNumberUpdated();
});

let resultText = document.getElementById("resultText");

function afterGuessNumberUpdated() {
  let randomNumber = getRandomNumber();
  if (randomNumber == guessNumber) {
    resultText.textContent =
      "Congratulations! You guessed the right number: " + guessNumber;
  } else {
    resultText.textContent =
      "Try again! You guessed " +
      guessNumber +
      ", but the number was " +
      randomNumber;
  }
}
