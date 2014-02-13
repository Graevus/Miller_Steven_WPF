
//This should tell the user how many steps it would take to walk a perimeter.

//Variables will be listed here.

var length = prompt("Please indicate the length in feet. \nRemember to round down.");//Prompting for length of area.
var width = prompt("Please determine the width in feet. \nRemember to round down.");//Prompting for width of area.
var steps = prompt("Please input your walking stride in feet. \nRemember to round down.");//Prompting for stride length.


var result = 2 * (Number(length) + Number(width)) / Number(steps);//Calculation for the perimeter will be divided by the stride length here.

//Display functions.

//alert ("The estimated number of steps is "+result)//Declaring the result of the above line and giving it to the user in alert format. disabling this in case you don't want it.


console.log("The estimated number of steps is "+result);//Prints the result variable to the console.

//My apologies if I'm a little heavy on the parentheses, but it was the only way I could get this to work.