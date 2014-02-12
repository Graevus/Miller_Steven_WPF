//Variables will be listed here.

var length = prompt("Please input the length in feet. \nRemember to round down."); //Prompting for length of area.
var width = prompt("Please input the width in feet. \nRemember to round down."); //Prompting for width of area.
var steps = prompt("Please input your walking stride in feet. \nRemember to round down."); //Prompting for stride length.


var result = 2 * (Number(length) + Number(width)) / Number(steps); //Calculation for the perimeter will be divided by the stride length here.


alert ("The estimated number of steps is "+result)//Declaring the result of the above line and giving it to the user in alert format.


console.log(result);
