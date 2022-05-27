let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let winner = document.getElementById('winner')
let cpu = document.getElementById('cpu')
let score = document.getElementById('score')
let cpuImage = document.getElementById('cpuImage')
let playerScore = 0
let cpuScore = 0
let choice
let cpuChoice

score.textContent += ` ${playerScore}:${cpuScore}`

function check(){
   if(choice == cpuChoice){
      winner.textContent = "Tie!"
   }
   switch(choice){
      case 0: switch(cpuChoice){
         case 1: winner.textContent = "You lose!"; cpuScore++; break;
         case 2: winner.textContent = "You win!"; playerScore++; break;
      }; break;
      case 1: switch(cpuChoice){
         case 2: winner.textContent = "You lose!"; cpuScore++; break;
         case 0: winner.textContent = "You win!"; playerScore++; break;
      }; break;
      case 2: switch(cpuChoice){
         case 0: winner.textContent = "You lose!"; cpuScore++; break;
         case 1: winner.textContent = "You win!"; playerScore++; break;
      }; break;
   }
}

function displayCpuChoice(){
   switch(cpuChoice){
      case 0: cpuImage.src = "rock.png";
      break; 
      case 1: cpuImage.src = "paper.png";
      break;
      case 2: cpuImage.src = "scissors.png";
      break;
   }
}

function choseRock(){
   choice = 0
   cpuChoice = Math.floor(Math.random() * 3)
   displayCpuChoice()
   check()
   score.textContent = `Score ${playerScore}:${cpuScore}`
}

function chosePaper(){
   choice = 1
   cpuChoice = Math.floor(Math.random() * 3)
   displayCpuChoice()
   check()
   score.textContent = `Score ${playerScore}:${cpuScore}`
}

function choseScissors(){
   choice = 2
   cpuChoice = Math.floor(Math.random() * 3)
   displayCpuChoice()
   check()
   score.textContent = `Score ${playerScore}:${cpuScore}`
}

rock.addEventListener('click', choseRock);
paper.addEventListener('click', chosePaper);
scissors.addEventListener('click', choseScissors);