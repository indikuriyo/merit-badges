/*guess validate merit badge
 *by innocent
 */
games = 0;
again = true;
totalTurns = 0;
while(again == true){
	guess = 0;
	turns = 0;
	games++;
	answer=Math.floor(Math.random()*100)+1;
	console.log(answer);
	var guess = 0;
	while (guess != answer){
		guess=prompt("Guess my number (1-100)");
		if(guess == "q") break;
		if (validator(guess)==true){
			turns++;
			if(guess<answer) alert("too low");
			else if(guess>answer) alert("too high");
		}
		else if (validator(guess)==false) alert("invalid guess");
	}
	if(guess == "q") {
		break;
		alert("quitter");
	}
	 gameStats();
	 again = newGame();

}


function validator(guess){
	if (guess > 0 && guess < 101) return true;
	else {
		return false;
	}
}

function gameStats(){
	alert("you guessed in "+turns+" turns!");
	totaTurns = totalTurns+turns;
	averageTurns = totaTurns/games;
	alert("you won "+games+" games with an average of "+averageTurns+" turns per game!")
}

function newGame(){
	again = confirm("do you want to play again?");
	return again;
}