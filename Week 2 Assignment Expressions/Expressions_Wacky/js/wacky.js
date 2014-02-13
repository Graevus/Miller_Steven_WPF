//Displaying the number of padded sheets and size of sheet to cover surface area of a given room

//Declaring my variables

var length=prompt("Please input the length of the room in feet.");
var width=prompt("Please input the width of the room in feet.");
var height=prompt("please input the height of the room in feet.");
var sheet=[ 32,36,40,48 ]
var room=2*length*width+2*width*height+2*length*height
var result1=room/sheet[0]

console. log("You will need "+Math.round(result1)+" 4x8 sheets.\nYou will need "+Math.round(result1)+" 4x9 sheets.\nYou will need "+Math.round(result1)+" 4x10 sheets.\nYou")


