
//Steven Miller
//02/26/14
//Functions - Industry

var weekOne  = prompt("How many incident reports in week one? ");//Prompting user for incidents in week one.
    if (weekOne == ("")){var weekOne = prompt ("How many incident reports in week one?");}//Repeating the prompt in case the prompt was left blank the first time.

var weekTwo  = prompt("How many incident reports in week two? ");//Prompting user for incidents in week two.
    if (weekTwo == ("")){var weekTwo = prompt ("How many incident reports in week two?");}//Repeating the prompt in case the prompt was left blank the first time.

var weekThree  = prompt("How many incident reports in week three? ");//Prompting user for incidents in week three.
    if (weekThree == ("")){var weekThree = prompt ("How many incident reports in week three?");}//Repeating the prompt in case the prompt was left blank the first time.

var weekFour  = prompt("How many incident reports in week four? ");//Prompting user for incidents in week four.
    if (weekFour == ("")){var weekFour = prompt ("How many incident reports in week four?");}//Repeating the prompt in case the prompt was left blank the first time.



var total = result(weekOne,weekTwo,weekThree,weekFour);//Invoking the result function.

function result (a,b,c,d){
    var add = Number(a)+Number(b)+Number(c)+Number(d);//The reult function which calculates the number of incident reports for the month.
    return add;

}
var calc = function(a,b){
    var divide = a/b;//Anonymous function to calculate the average number of reports.
    return divide;

}
var average = calc(total,4);//Invoking the anonymous function.


console.log("You have had "+total+" incidents this month. The is an average of "+average+" incidents per week.");//Displaying the results to the console.