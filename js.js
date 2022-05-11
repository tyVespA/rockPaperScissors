"use strict"

function computerPlay() {
    let num = Math.floor(Math.random() * 3)
    if (num == 0) {
        return "rock"
     } else if (num == 1){
        return "paper"
     } else {
        return "scissors"
     }
}

function playerPlay(){
    let play = prompt("Rock, paper or scissors?")
    if (play.toLowerCase() == "rock") {
        return "rock"
     } else if (play.toLowerCase() == "paper") {
        return "paper"
     } else if (play.toLowerCase() == "scissors") {
        return "scissors"
     } else {
        return alert("Choose either rock, paper or scissors")
     }
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        return ("It's a draw!")
    } else if (computerSelection == "rock" && 
        playerSelection == "paper") {
            return  ("You won! Paper beats rock")
    } else if (computerSelection == "rock" &&
        playerSelection == "scissors") {
            return  ("You lose! Scissors loses to rock")
    } else if (computerSelection == "paper" &&
        playerSelection == "rock") {
            return ("You lose! Rock loses to paper")
    } else if (computerSelection == "paper" &&
        playerSelection == "scissors") {
            return ("You won! Scissors beat paper")
    } else if (computerSelection == "scissors" &&
        playerSelection == "paper"){
            return  ("You lose! Paper loses to scissors")
    } else if (computerSelection == "scissors" &&
        playerSelection == "rock") {
            return ("You win! Rock beats scissors")
        }
}



function game() {
    let playerScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay()
        let playerSelection = playerPlay()
        console.log(playRound(computerSelection, 
            playerSelection))
        let result = playRound(computerSelection, playerSelection)
        if (result.charAt(4) == "w"){
            ++playerScore
            console.log("You: " + playerScore + ", Computer " + computerScore)
        } else if (result.charAt(4) == "l"){
            ++computerScore
            console.log("You: " + playerScore + ", Computer " + computerScore)
        } else {
            console.log("You: " + playerScore + ", Computer " + computerScore)
        }
    }
    if (computerScore == playerScore) {
        alert("DRAW! Try again")
    } else if (computerScore < playerScore) {
        alert("You won sheesh " + playerScore + " to " + computerScore)
    } else {
        alert("You lost lol " + playerScore + " to " + computerScore)
    }
}

game()
console.log(playerScore, computerScore)
