//Steven Miller 2/18/14
//Since I went with a guard theme last time I did the same here. (I was a prison guard at one time.)
//Prisoner release date given the scheduled release date is in the current month and year.

//Variables will be listed here.

var sRelease = prompt("What day of this month is the prisoner scheduled to be released?");//Prompting for the scheduled release day .
    if (sRelease == ("")){var sRelease = prompt ("Determine the scheduled release day.");}//In case the previous prompt comes back empty the user is given another prompt to give the information in.

var  goodB = prompt("How many good behavior days has the prisoner accumulated?");//Prompting for number of good behavior days the prisoner has accumulated.
    if (goodB == ("")){var goodB = prompt ("Determine the number of good behavior days here.");}//In case the previous prompt comes back empty the user is given another prompt to give the information in.

var date = prompt("What is today's date?");//Prompting for the current day.
    if (date == ("")){var date = prompt ("Please give the date here.");}//In case the previous prompt comes back empty the user is given another prompt to give the information in.

var nRelease = (sRelease - goodB);//Calculating the release date of the prisoner

//Display functions.

if (nRelease <= date)console.log("You may release the prisoner.")//If statement is true prints to console "you may release the prisoner."
else console.log("You may not release the prisoner.");//If the above statement is false then prints to console "You may not release the prisoner."

