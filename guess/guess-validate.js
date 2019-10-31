/*guess validate merit badge
 *by innocent
 */
answer=Math.floor(Math.random()*100)+1;
console.log = 24;
var guess = 0; 
var turns = 0
alert(answer);
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
if (guess == answer) alert("you got in in "+turns+" turns");
else alert("quitter");


function validator(guess){
if (guess > 0 && guess < 101) return true;
else return false;
}