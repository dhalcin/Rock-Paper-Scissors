// The Odin Project
function game() {
	let resultPlayer = 0;
	let resultComputer = 0;
	let notWiner = 0;

	for (let i = 0; i < 5; i++) {
		function getComputer() {
			const myArray = ["Rock", "Papper", "Scissors"];
			let luck = Math.floor(Math.random() * myArray.length);
			return myArray[luck];
		}
		const computerSelection = getComputer();
		const playerSelection = prompt("Enter");
		
		function playRound(playerSelection, computerSelection) {
			if (playerSelection == computerSelection) {
				console.log("Empate")
				notWiner++
			}
			// player
			if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
			(playerSelection == "Papper" && computerSelection == "Rock") ||
			(playerSelection == "Scissors" && computerSelection == "Papper")) {
				console.log("Gana el jugador");
				resultPlayer++;
			}
			// computer
			if ((computerSelection == "Rock" && playerSelection == "Scissors") ||
			(computerSelection == "Papper" && playerSelection == "Rock") ||
			(computerSelection == "Scissors" && playerSelection == "Papper")) {
				console.log("Gana la maquina");
				resultComputer++;
			}
		}
		playRound(playerSelection, computerSelection);
	}
	if (resultPlayer > resultComputer) {
		document.write("Gana el jugador");
	}else if (resultPlayer < resultComputer) {
		document.write("Gana la maquina");
	}else {
		document.write("no hay ganadores");
	}
}
game();
// The Odin Project