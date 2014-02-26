
//Steven Miller
//02/26/14

var weekOne  = prompt("How many incident reports in week one? ");
    if (weekOne == ("")){var weekOne = prompt ("How many incident reports in week one?");}

var weekTwo  = prompt("How many incident reports in week two? ");
    if (weekTwo == ("")){var weekTwo = prompt ("How many incident reports in week two?");}

var weekThree  = prompt("How many incident reports in week three? ");
    if (weekThree == ("")){var weekThree = prompt ("How many incident reports in week three?");}

var weekFour  = prompt("How many incident reports in week four? ");
    if (weekFour == ("")){var weekFour = prompt ("How many incident reports in week four?");}



var total = result(weekOne,weekTwo,weekThree,weekFour);

function result (a,b,c,d){
    var add = Number(a)+Number(b)+Number(c)+Number(d);
    return add;

}

console.log(total);