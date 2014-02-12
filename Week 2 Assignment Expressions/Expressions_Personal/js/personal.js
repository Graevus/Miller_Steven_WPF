//This code should give the use the displacement in cubic inches of an engine given the information provided.

//Variable will be declared here

var bore=prompt("Please indicate the cylinder bore size.\nCylinder bore is the diameter (in inches) of each cylinder");//Prompting the user to input bore size.
var stroke=prompt("Please define the stroke (in inches) of the crankshaft.\nThe stroke is the distance each piston in the engine travels from bottom to top dead center.");//Prompting user to give the stroke length.
var cyl=prompt("Please determine the number of cylinders.");//Prompting user to input the number of cylinders in the engine.
var pie= 0.785; //Declaring variable for pie divided by 4 to make my life easier.
var bore2= bore*bore;//Declaring variable to square bore size.
var result=[(pie*bore2)*stroke]*cyl//Declaring variable to calculate the displacement with given inputs.

//Display functions

alert("The displacement of your engine is "+ Math.round(result) +" cubic inches.")//Adding function to display result in an alert.

console.log ("The displacement of your engine is "+ Math.round(result) +" cubic inches.");//displaying the result in the console for the user to see.