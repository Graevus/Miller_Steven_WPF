//Steven Miller 2/18/14
//prisoner release date

//Variables will be listed here.

var sRelease = prompt("What is the scheduled release date of the prisoner?");//Prompting for .
    if (sRelease == ("")){prompt ("Determine the scheduled release date.")}
var  goodB= prompt("How many good behavior days has the prisoner accumulated?");//Prompting for .
    if (goodB == ("")){prompt ("Determine the number of good behavior days here.")}
//var date = prompt("What is today's date?")
    if (date == ("")){prompt ("Please give the date here.")}

//Calculating the release date of the prisoner

var nRelease = sRelease - goodB

//Display functions.

console.log(nRelease);//Prints the result variable to the console.

