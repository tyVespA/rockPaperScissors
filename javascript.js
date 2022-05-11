function computerPlayGenerator() {
   return Math.floor(Math.random() * 3 + 0)
}

function computerPlay() {
   let num = computerPlayGenerator()
   if (num == 0) {
      return "Rock"
   } else if (num == 1){
      return "Paper"
   } else {
      return ("Scissors")
   }
}

console.log(computerPlay())