//Steven Miller
//02/26/14
//Functions - Personal

var tank  = prompt("What is the size of your gas tank?");//Prompting user for the size of gas tank.
    if (tank == ("")){var tank = prompt ("What is the size of your gas tank?");}//Repeating the prompt in case the prompt was left blank the first time.

var mile  = prompt("How many miles do you average per tank of fuel?");//Prompting user for average number of miles per tank of fuel.
    if (mile == ("")){var mile = prompt ("How many miles do you average per tank of fuel?");}//Repeating the prompt in case the prompt was left blank the first time.

var mpg = function(a,b){
    var calc = a/b;//anonymous function to calculate the average miles per gallon.
    return calc;

}
var result = mpg(mile,tank);//Invoking the function.

console.log("You are getting on average "+result+" mpg.")//Displaying the result to the console.