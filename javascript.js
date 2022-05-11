function computerPlayGenerator() {
   return Math.floor(Math.random() * 3)
}

function computerSelection() {
   let num = computerPlayGenerator()
   if (num == 0) {
      return "rock"
   } else if (num == 1){
      return "paper"
   } else {
      return ("scissors")
   }
}

function playerPlay() {
   let play = prompt("Rock, paper or scissors?")
   return play
}


function playerSelection() {
   let playerPlayCase = playerPlay()
   if (playerPlayCase.toLowerCase() == "rock") {
      return "rock"
   } else if (playerPlayCase.toLowerCase() == "paper") {
      return "paper"
   } else if (playerPlayCase.toLowerCase() == "scissors") {
      return "scissors"
   } else {
      return alert("Choose either rock, paper or scissors")
   }
}

computerSelection()
playerSelection()


function playRound (playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
      return "It's a draw!"
   } else {
      return "I didn't program this yet"
   }
}

alert(playRound())