//Steven Miller
//02/26/14
//Functions - Wacky

var ppl  = prompt("Are there other people around?/n" +
    "Answer yes or no, no caps.");//Prompting user for answer to question.
    if (ppl == ""){var ppl = prompt ("Are there other people around?/n" +
        " Answer yes or no, no caps.");}//Repeating the prompt in case it was left blank the first time.
    else if (ppl == "no"){var ppl = 0;}//Declaring the value of result for later purpose.
    else if (ppl =="yes"){var ppl = 1;}//Declaring the value of result for later purpose.

var funny = prompt("Would it be funny?/n" +
    "yes or no, no caps.");//Prompting user for answer to question.
    if (funny == ""){var funny = prompt ("Would it be funny? /n" +
        "yes or no, no caps.");}//Repeating the prompt in case it was left blank the first time.
    else if (funny == "no"){var funny = 0;}//Declaring the value of result for later purpose.
    else if (funny == "yes"){var funny = 1;}//Declaring the value of result for later purpose.

var calc=function(a,b){
    var add =Number(a)+Number(b);//Function to calculate the result of the previous variables added together.
    return add;
}
var result = calc(ppl,funny);//Invoking the previous function.

    (result==2)? console.log("Yes, hit them with the pie!"):console.log("Better wait for when it would be funnier.");//Displaying the result based on if the answer to the function is equal to 2 (the maximum possible answer) or not.