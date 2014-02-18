//Steven Miller 2/18/14
//Calculate if you need an oil change

//Variable will be declared here

var lMileage = prompt("What was the mileage of the vehicle at last oil change?");
    if (lMileage == ("")){var lMileage = prompt ("Determine the mileage of last oil change here.");}

var cMileage = prompt("What is the current mileage of the vehicle?");
    if (cMileage == ("")){var cMileage = prompt ("Determine the mileage of the vehicle.");}

var oil = 3000//Number of miles the average oil change lasts.

var oilC = (lMileage + oil);//Calculating mileage to next oil change.



//Display functions


if (oilC == cMileage){console.log("You need to get an oil change, but your safe to put it off for a few days.");}//If statement is true prints to console "You need to get an oil change, but your safe to put it off for a few days."
    else if (oilC < cMileage){console.log("You do not need an oil change.");}//If the  statement is true then prints to console "You do not need an oil     change." but only if previous statement is false.
    else {console.log("You could use an oil change, but you can put it off a few days too.");}//If the previous two statements are false then print to console "You could use an oil change, but you can put it off a few days too."

//Not sure why but I can't seem to get the first if statement to trigger. Any suggestions would be helpful.