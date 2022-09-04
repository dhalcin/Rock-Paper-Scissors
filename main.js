// The Odin Project

function game() {

	const resultPlayer = [];
	const resultComputer = [];

	for (let i = 0; i < 5; i++) {
		const playerSelection = prompt("Choice", "Rock, Papper, Scissors");

		function getComputer() {
			const myArray = ["Rock", "Papper", "Scissors"];
			const luck = Math.floor(Math.random() * myArray.length);

			return myArray[luck];
		}

		const computerSelection = getComputer();
		
		//const resultPlayer = [];
		//const resultComputer = [];

		function playRound(playerSelection, computerSelection) {
	
			if(playerSelection == "Rock") {
		
				if(computerSelection == "Papper") {
					console.log("You Lose! Papper beats Rock");
					resultComputer.push("w");
				}
				else if(computerSelection == "Rock") {
					console.log("There are no winners");
				}
				else if(computerSelection == "Scissors") {
					console.log("You Win! Rock beats Scissors");
					resultPlayer.push("w");
				}
			}

			else if(playerSelection == "Papper") {
				
				if(computerSelection == "Papper") {
					console.log("There are no winers");
				}
				else if(computerSelection == "Rock") {
					console.log("You Win! Papper beats Rock");
					resultPlayer.push("w");
				}
				else if(computerSelection == "Scissors") {
					console.log("You Lose! Scissors beats Papper");
					resultComputer.push("w");
				}
			}

			else if(playerSelection == "Scissors") {
				if(computerSelection == "Papper") {
					console.log("You Win! Scissors beats Papper");
					resultPlayer.push("w");
				}
				else if(computerSelection == "Rock") {
					console.log("You Lose! Rock beats Scissors");
					resultComputer.push("w");
				}
				else if(computerSelection == "Scissors") {
					console.log("There are no winers");
				}
			}
		}
		playRound(playerSelection, computerSelection);

		//if (resultPlayer.length > resultComputer.length) {
		//	console.log("Has ganado a la maquina");
		//}
		//else {
		//	console.log("La maquina ha ganado");
		//}
	}

	if (resultPlayer.length > resultComputer.length) {
		console.log("Has ganado a la maquina");
	}
	else if (resultPlayer.length == resultComputer.length) {
		console.log("Nadie ha ganado");
	}
	else {
		console.log("La maquina ha ganado");
	}
}

game();

//The Odin Project
