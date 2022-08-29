// The Odin Project

function getComputer() {
	const myArray = ["Rock", "Papper", "Scissors"];
	const luck = Math.floor(Math.random() * myArray.length);

	//console.log(myArray[luck]);
	return myArray[luck];
}

//console.log(getComputer());

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

const playerSelection = "Rock";
const computerSelection = getComputer();
document.write(computerSelection);

console.log(playRound(playerSelection, computerSelection));

