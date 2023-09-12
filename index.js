let playerChoice;
let computerChoice;

let wins = 0;
let losses = 0;
let ties = 0;
let answer;

const winScore = document.querySelector('.win');
const lossScore = document.querySelector('.loss');
const tieScore = document.querySelector('.tie');
const answerText = document.querySelector('.answer');
const resultText = document.querySelector('.result');

//Generate random number function
function getRandomNumber(max){

  return Math.floor(Math.random() * max);

}

//Make the computer's choice
function getComputerChoice(){

  let rand = getRandomNumber(3);
  switch (rand){
    case 0:
      answer = "Rock"
      break;
    case 1:
      answer = "Paper"
      break;
    case 2:
      answer = "Scissors"
      break;
  }

  return rand;
}

function convertPlayerChoice(choice){

  let lower = choice.toLowerCase();

  switch(lower){
    case "rock":
      console.log("Player: Rock");
      return 0;
      break;
    case "paper":
      console.log("Player: Paper");
      return 1;
      break;
    case "scissors":
      console.log("Player: Scissors");
      return 2;
      break;
  }

}

function updateWinLossTie(){
  winScore.textContent = wins;
  lossScore.textContent = losses;
  tieScore.textContent = ties;
}

function updateAnswer(){
  answerText.textContent = answer;
}

function round(player,computer){

  if (player == 0 && computer == 0) {
    ties += 1;
    resultText.textContent =  "Tie";  
  } else if (player == 0 && computer == 1) {
    losses +=1;
    resultText.textContent = "You lose! Paper beats rock.";
  } else if (player == 0 && computer == 2) {
    wins += 1;
    resultText.textContent = "You win! Rock beats scissors.";
  } else if (player == 1 && computer == 0) {
    wins += 1;
    resultText.textContent = "You win! Paper beats rock.";
  } else if (player == 1 && computer == 1) {
    ties += 1;
    resultText.textContent = "Tie";
  } else if (player == 1 && computer == 2) {
    losses +=1;
    resultText.textContent = "You lose! Scissors beats paper.";
  } else if (player == 2 && computer == 0) {
    losses +=1;
    resultText.textContent = "You lose! Rock beats scissors.";
  } else if (player == 2 && computer == 1) {
    wins += 1;
    resultText.textContent = "You win! Scissors beats paper.";
  } else if (player == 2 && computer == 2) {
    ties += 1;
    resultText.textContent = "Tie";
  } else {
    resultText.textContent = "You're answer was undefined."
  }

}

updateWinLossTie();

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

btnRock.onclick = () => {
  playerChoice = 0;
  computerChoice = getComputerChoice();
  updateAnswer();
  console.log(round(playerChoice,computerChoice));
  updateWinLossTie();
}
btnPaper.onclick = () => {
  playerChoice = 1;
  computerChoice = getComputerChoice();
  updateAnswer();
  round(playerChoice,computerChoice);
  updateWinLossTie();
}
btnScissors.onclick = () => {
  playerChoice = 2;
  computerChoice = getComputerChoice();
  updateAnswer();
  round(playerChoice,computerChoice);
  updateWinLossTie();
}