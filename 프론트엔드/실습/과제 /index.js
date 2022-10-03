const rangeNumber = document.querySelector("h2 input");
const sumbitForm = document.querySelector("form");
const GuessNumber = document.querySelector("h3 input");
let RandomNumber = 0;

function putRangeNumber() {
  RandomNumber = Math.floor(Math.random() * parseInt(rangeNumber.value));
  console.log(RandomNumber);
}

function checkWin(event) {
  event.preventDefault();
  if (parseInt(GuessNumber.value) === RandomNumber) {
    alert("You win");
  } else {
    alert("You lose");
  }
}

rangeNumber.addEventListener("change", putRangeNumber);
sumbitForm.addEventListener("submit", checkWin);
