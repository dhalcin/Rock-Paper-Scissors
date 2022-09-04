// The Odin Project

function game() {
	for (let i = 0; i < 5; i++) {
		const playerSelection = prompt("Choice", "Rock, Papper, Scissors");

		function getComputer() {
			const myArray = ["Rock", "Papper", "Scissors"];
			const luck = Math.floor(Math.random() * myArray.length);

			return myArray[luck];
		}

		const computerSelection = getComputer();

		function playRound(playerSelection, computerSelection) {
	
			if(playerSelection == "Rock") {
		
				if(computerSelection == "Papper") {
					console.log("You Lose! Papper beats Rock");
				}
				else if(computerSelection == "Rock") {
					console.log("There are no winners");
				}
				else if(computerSelection == "Scissors") {
					console.log("You Win! Rock beats Scissors");
				}
			}

			else if(playerSelection == "Papper") {
				
				if(computerSelection == "Papper") {
					console.log("There are no winers");
				}
				else if(computerSelection == "Rock") {
					console.log("You Win! Papper beats Rock");
				}
				else if(computerSelection == "Scissors") {
					console.log("You Lose! Scissors beats Papper");
				}
			}

			else if(playerSelection == "Scissors") {
				if(computerSelection == "Papper") {
					console.log("You Win! Scissors beats Papper");
				}
				else if(computerSelection == "Rock") {
					console.log("You Lose! Rock beats Scissors");
				}
				else if(computerSelection == "Scissors") {
					console.log("There are no winers");
				}
			}
		}
		playRound(playerSelection, computerSelection);
	}
}

game();