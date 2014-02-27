//Steven Miller
//02/26/14
//Functions - Wacky

var ppl  = prompt("Are there other people around?/n" +
    " Answer yes or no, no caps.");//Prompting user for the size of gas tank.
    if (ppl == ""){var ppl = prompt ("Are there other people around?/n" +
        " Answer yes or no, no caps.");}
    else if (ppl == "no"){var ppl = 0;}
    else if (ppl =="yes"){var ppl = 1;}

var funny = prompt("Would it be funny?/n" +
    "yes or no, no caps.");
    if (funny == ""){var funny = prompt ("Would it be funny? /n" +
        "yes or no, no caps.");}
    else if (funny == "no"){var funny = 0;}
    else if (funny == "yes"){var funny = 1;}

var calc=function(a,b){
    var add =Number(a)+Number(b);
    return add;
}
var result = calc(ppl,funny);

    (result==2)? console.log("Yes, hit them with the pie!"):console.log("Better wait for when it would be funnier.");