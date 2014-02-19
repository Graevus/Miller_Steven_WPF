//Steven Miller 2/18/14
//Calculate the amount you spend on entertainment

//Declaring my variables

var movie = prompt("How much do you spend going to the movies?");//Asking for amount spent at movies.
    if (movie == ("")){var movie = prompt ("You forgot to tell me how much you spend at the movies.");}//Asking for amount spent at movies again if user left prompt blank first time.

var game = prompt ("how much do you spend on games.");//Asking user for amount spent on gaming.
    if (game == ("")){var game = prompt ("You forgot to tell me how much you spend on games.");}//Asking for amount spent at movies again if user left prompt blank first time.
var wow = 200;//there for comparison to the result.
var result = Number(movie)+Number(game);

    (wow<=result) ? console.log("Your spending "+result+" dollars on entertainment. Wow! That's a lot!") : console.log("You spend about "+result+" dollars on entertainment.");



//Display Functions



