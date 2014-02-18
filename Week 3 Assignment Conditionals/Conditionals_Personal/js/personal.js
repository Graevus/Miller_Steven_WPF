//Steven Miller 2/18/14
//Calculate if you need an oil change

//Variable will be declared here

var lMileage = prompt("What was the mileage of the vehicle at last oil change?")
    if (lMileage == ("")){var lMileage = prompt ("Determine the mileage of last oil change here.");}
var cMileage = prompt("What is the current mileage of the vehicle?")
    if (cMileage == ("")){var cMileage = prompt ("Determine the mileage of the vehicle.");}
var oil = 3000

var oilC = (lMileage + oil);



//Display functions


if (oilC >= cMileage)console.log("You need to get an oil change.")//If statement is true prints to console "you may release the prisoner."
else console.log("You do not need an oil change.");//If the above statement is false then prints to console "You may not release the prisoner."