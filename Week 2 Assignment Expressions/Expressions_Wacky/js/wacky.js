//Displaying the number of padded sheets and size of sheet to cover surface area of a given room.

//Declaring my variables

var length=prompt("Please indicate the length of the room in feet.");//Prompting user for length of room in feet.
var width=prompt("Please define the width of the room in feet.");//Prompting user for width of room in feet.
var height=prompt("please determine the height of the room in feet.");//Prompting user for height of room in feet.
var sheet=[ 32,36,40,48 ];//Setting up an array for the surface area of the differant sheet sizes.

var room=2*length*width+2*width*height+2*length*height;//calculating the surface area of the room using the measurements given by the user.

var result1=room/sheet[0];//Calculating the number of sheets needed using 4'x8' sheets.
var result2=room/sheet[1];//Calculating the number of sheets needed using 4'x9' sheets.
var result3=room/sheet[2];//Calculating the number of sheets needed using 4'x10' sheets.
var result4=room/sheet[3];//Calculating the number of sheets needed using 4'x12' sheets.

//Display Functions

console. log("You will need "+Math.round(result1)+" 4'x8' sheets.\nYou will need "+Math.round(result2)+" 4'x9' sheets.\nYou will need "+Math.round(result3)+" 4'x10' sheets.\nYou will need "+Math.round(result4)+" 4'x12' sheets.");//Displaying the answer on the console for the user.

//alert("You will need "+Math.round(result1)+" 4'x8' sheets.\nYou will need "+Math.round(result2)+" 4'x9' sheets.\nYou will need "+Math.round(result3)+" 4'x10' sheets.\nYou will need "+Math.round(result4)+" 4'x12' sheets.");//My alret display function, dunno why I just like adding it.


//still can't seem to work out why my opeing and closeing "" marks are showing in the console, may just be some wierd setting in my browser I hit or something. If you see them and know what I'm doing wrong just let me know.