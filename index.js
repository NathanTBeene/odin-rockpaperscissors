//Generate random number function
function getRandomNumber(max){

  return Math.floor(Math.random() * max);

}

//Make the computer's choice
function getComputerChoice(){

  let rand = getRandomNumber(3);
  switch (rand){
    case 0:
      console.log("Computer: Rock");
      break;
    case 1:
      console.log("Computer: Paper");
      break;
    case 2:
      console.log("Computer: Scissors");
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

function round(player,computer){

  if (player == 0 && computer == 0) {
    return "Tie";
  } else if (player == 0 && computer == 1) {
    return "You lose! Paper beats rock.";
  } else if (player == 0 && computer == 2) {
    return "You win! Rock beats scissors.";
  } else if (player == 1 && computer == 0) {
    return "You win! Paper beats rock.";
  } else if (player == 1 && computer == 1) {
    return "Tie";
  } else if (player == 1 && computer == 2) {
    return "You lose! Scissors beats paper.";
  } else if (player == 2 && computer == 0) {
    return "You lose! Rock beats scissors.";
  } else if (player == 2 && computer == 1) {
    return "You win! Scissors beats paper.";
  } else if (player == 2 && computer == 2) {
    return "Tie";
  } else {
    return "You're answer was undefined."
  }

}

let playerChoice = getComputerChoice();
let computerChoice = getComputerChoice();

console.log(round(playerChoice,computerChoice));