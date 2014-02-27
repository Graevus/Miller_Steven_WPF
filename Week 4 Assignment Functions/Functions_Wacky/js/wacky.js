//Steven Miller
//02/26/14
//Functions - Wacky

var ppl  = prompt("Are there other people around? Answer yes or no, no caps.");//Prompting user for the size of gas tank.
    if (ppl =="yes"){var ppl = 1}
    else if (ppl == "no"){var ppl = 0}
    else if (ppl == ""){var ppl = prompt ("Are there other people around? Answer yes or no, no caps.");}

var funny = prompt("Would it be funny? yes or no, no caps.");
    if (funny == "yes"){var funny = 1}
    else if (funny == "no"){var funny = 0}
    else if (funny == ""){var funny = prompt ("Would it be funny? yes or no, no caps.");}
var result = Number(ppl)+Number(funny);

    (result==2)? console.log("yes"):console.log("no");