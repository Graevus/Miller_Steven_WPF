//Variables will be listed here.

var length = prompt("Please input the length in feet here. \nRemember to round down."); //Prompting for length of area.
var width = prompt("please input the width in feet here. \nRemember to round down."); //Prompting for width of area.
var steps = prompt("please input your walking stride in feet here. \nRemember to round down."); //Prompting for stride length.

//Calculation for the perimeter will be divided by the stride length here.
var result = 2 * (Number(length) + Number(width)) / Number(steps);

console.log(result);
