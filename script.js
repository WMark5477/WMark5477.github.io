let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let winner = document.getElementById('winner')
let cpu = document.getElementById('cpu')
let score = document.getElementById('score')
let playerScore = 0
let cpuScore = 0
let choice
let cpuChoice

score.textContent += ` ${playerScore}:${cpuScore}`

function check(){
   if(choice == cpuChoice){
      winner.textContent = "Remis!"
   }
   switch(choice){
      case 0: switch(cpuChoice){
         case 1: winner.textContent = "Przegrałeś!"; cpuScore++; break;
         case 2: winner.textContent = "Wygrałeś!"; playerScore++; break;
      }; break;
      case 1: switch(cpuChoice){
         case 2: winner.textContent = "Przegrałeś!"; cpuScore++; break;
         case 0: winner.textContent = "Wygrałeś!"; playerScore++; break;
      }; break;
      case 2: switch(cpuChoice){
         case 0: winner.textContent = "Przegrałeś!"; cpuScore++; break;
         case 1: winner.textContent = "Wygrałeś!"; playerScore++; break;
      }; break;
   }
}

function displayCpuChoice(){
   switch(cpuChoice){
      case 0: cpu.textContent = "🧱";
      break; 
      case 1: cpu.textContent = "🧻";
      break;
      case 2: cpu.textContent = "✂";
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
