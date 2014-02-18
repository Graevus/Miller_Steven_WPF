//Steven Miller 2/18/14
//prisoner release date given the scheduled release date is in the current month and year.

//Variables will be listed here.

var sRelease = prompt("What day of this month is the prisoner scheduled to be released?");//Prompting for .
    if (sRelease == ("")){var sRelease = prompt ("Determine the scheduled release day.")}
var  goodB = prompt("How many good behavior days has the prisoner accumulated?");//Prompting for .
    if (goodB == ("")){var goodB = prompt ("Determine the number of good behavior days here.")}
var date = prompt("What is today's date?")
    if (date == ("")){var date = prompt ("Please give the date here.")}

//Calculating the release date of the prisoner

var nRelease = sRelease - goodB

//Display functions.
if (nRelease <= date)
    console.log("You may release the prisoner.");//Prints the result variable to the console.
else console.log("You may not release the prisoner.")

