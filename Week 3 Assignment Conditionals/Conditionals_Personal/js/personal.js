//Steven Miller 2/18/14
//Calculate if you need an oil change

//Variable will be declared here

var lMileage = prompt("What was the mileage of the vehicle at last oil change?")
    if (lMileage == ("")){var lMileage = prompt ("Determine the mileage of last oil change here.");}

var cMileage = prompt("What is the current mileage of the vehicle?")
    if (cMileage == ("")){var cMileage = prompt ("Determine the mileage of the vehicle.");}

var oil = 3000

var oilC = (lMileage + oil);//Number of miles the average oil change lasts.



//Display functions


if (oilC < cMileage)console.log("You need to get an oil change.")//If statement is true prints to console "You need to get an oil change."
    else console.log("You do not need an oil change.");//If the above statement is false then prints to console "You do not need an oil     change."
if (oilC == cMileage)console.log("You could use an oil change, but you can put it off a few days too.")//If the statement is true then print to console "You could use an oil change, but you can put it off a few days too."