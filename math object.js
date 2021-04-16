//guessing Game
//guessing Number 1 t0 7
//Create a random Number 1 to 7
//run the game for 7 times
// If guessing number match with random number,then show won messages else lost message
//Show the total Number of win or lost.


var Numberofwon=0;
var NumberofLost=0;

for(var i=0;i<7;i++){
var GuessNumber=parseInt (prompt("Enter a number from 1 to 7: "));
var randomNumber=Math.floor(Math.random()*7)+1;
if
    (GuessNumber==randomNumber){
        console.log("Congrats!! You have won the Game");
        Numberofwon++;
}
else{
    console.log("Sorry!! You have lost in this Game.Random Number was " +randomNumber);
    NumberofLost++;
}
}
document.write("number of Won "+Numberofwon +"<br>");
document.write("number of Lost "+NumberofLost +"<br>");