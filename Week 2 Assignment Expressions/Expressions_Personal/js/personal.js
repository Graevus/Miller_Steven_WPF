//This code should give the use the displacement in cubic inches of an engine given the information provided.

//Variable will be declared here

var bore=prompt("Please input Cylinder bore size here.\nCylinder bore is the diameter (in inches) of each cylinder");//Prompting the user to input bore size.
var stroke=prompt("Please input the stroke (in inches) of the crankshaft.\nThe stroke is the distance each piston in the engine travels from bottom to top dead center.");//Prompting user to give the stroke length.
var cyl=prompt("Please input the number of cylinders the engine has.");//Prompting user to input the number of cylinders in the engine.
var pie= 0.785 //setting variable for pie divided by 4 to make my life easier.
var bore2= bore*bore
