// The Odin Project
let resultPlayer = 0;
let resultComputer = 0;
let notWiners = 0;

function getComputer() {
	const computerOption = ["Rock", "Papper", "Scissors"];
	let choice = Math.floor(Math.random() * computerOption.length);
	return computerOption[choice];
}
		
function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		notWiners++;
		resultText.innerHTML = 'Tie';
	}
	
	if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
		(playerSelection == "Papper" && computerSelection == "Rock") ||
		(playerSelection == "Scissors" && computerSelection == "Papper")) {
			resultPlayer++;
			resultText.innerHTML = 'Player : ' + resultPlayer + ' - ' + 'Computer : ' + resultComputer;
		}
	
	if ((computerSelection == "Rock" && playerSelection == "Scissors") ||
		(computerSelection == "Papper" && playerSelection == "Rock") ||
		(computerSelection == "Scissors" && playerSelection == "Papper")) {
			resultComputer++;
			resultText.innerHTML = 'Computer : ' + resultComputer + ' - ' + 'Player : ' + resultPlayer;
	}
}

function winner() {
	if (resultPlayer == 5 || resultComputer == 5) {
		if (resultPlayer == 5) {
			printWinner.innerHTML = "Gana el jugador";
		}else if(resultComputer == 5) {
			printWinner.innerHTML = "Gana la maquina";
		}
	}
}

const rockBtn = document.querySelector('#rock');
const papperBtn = document.querySelector('#papper');
const scissorsBtn = document.querySelector('#scissors');
const resultText = document.querySelector('#start-game');
const printWinner = document.querySelector('#result');

rockBtn.addEventListener('click', ()=> {
	clickEvent('Rock');
});
papperBtn.addEventListener('click', ()=>{
	clickEvent('Papper');
});
scissorsBtn.addEventListener('click', ()=> {
	clickEvent('Scissors');
});

function clickEvent(playerSelection) {
	const computerSelection = getComputer();
	//console.log("selection computer is : " + computerSelection);
	playRound(playerSelection, computerSelection);
	winner();
}
// The Odin Project