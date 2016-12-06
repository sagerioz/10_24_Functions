/*
=======================================================
** Week 2 - Project 1 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.

=======================================================
*/


// 0. Connect the main.js document to the HTML page.
/*    Add to the bottom of the HTML page: <script src="main.js"></script>*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");




// 1. Output each item in the following Array to your console within their own paragraphs:
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];

for(var i=0; i<livingRoom.length; i++) {
    document.getElementById("q1").innerHTML += "<p>" + livingRoom[i] + "</p>";
}



// 2. Using a loop, log numbers 22-33 within their own paragraphs.

for(i=22; i<=33; i++){
  document.getElementById("q2").innerHTML += "<p>" + i + "</p>";
}



// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.

for(i=75; i<=100; i+=5){
  document.getElementById("q3").innerHTML += "<p>" + i + "</p>";  
}



// 4. Write a while loop that displays paragraphs of "This is how a professional loops." to the HTML page 5 times.

var counter = 0;
while(counter < 5){
  document.getElementById("q4").innerHTML += "<p>This is how a profesh loopsies!</p>";  
  counter++;
}




// 5. Separately, use both a for loop and while loop to do the same thing.
//     Display in unique paragraphs the sentence "At home, I have _____ cats."
//     The numbers should range from 10 to 110, in increments of 25.

document.getElementById("q5").innerHTML = "<p>For Loop:</p>";  
for(i=10; i<=110; i+=25){
  document.getElementById("q5").innerHTML += "<p>At home, I have " + i + " cats.</p>";  
}

document.getElementById("q5").innerHTML += "<p>While Loop:</p>";  
var cats = 10;
while(cats <= 110){
  document.getElementById("q5").innerHTML += "<p>At home, I have " + cats + " cats.</p>";  
  cats+=25;
}



// 6. Given the following Array, display in unique paragraphs'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'
var numArray = [2, 17, 9, 24, 8];

for(i=0;i<numArray.length;i++){
  var num = numArray[i];

  if((num%2 === 0) && (num>10)){
	document.getElementById("q6").innerHTML += "<p>Even and greater than 10.</p>";  
  }
  else if(num%2 === 0){
    console.log("Even");
	document.getElementById("q6").innerHTML += "<p>Even.</p>";  

  }
  else{
	 document.getElementById("q6").innerHTML += "<p>Odd.</p>";  
  }
}



// 7. Using the following Array, create variable called numThrees with the value [13, 23, 33, 43, 53, 63, 73]
var numArray = [13, 15, 17, 23, 25, 27, 33, 35, 37, 43, 45, 47, 53, 55, 57, 63, 65, 67, 73, 75, 77];

/* It is important to recognize that this is not an easy to solve solution at first glace and that you are being challenged to really think about this.

The first step to solve this solution is you need to find the pattern between the starting array and the intended result. You may notice, that the intented result follows the pattern starting with the first value of the array and then selects every third value, one of the subtle hints was the array name you need is called numThrees.

var numArray = [{13}, 15, 17, {23}, 25, 27, {33}, 35, 37, {43}, 45, 47, {53}, 55, 57, {63}, 65, 67, {73}, 75, 77]

Now that you understand the pattern, you can now select evey third value using a loop.
*/

// Create a new array
var numThrees =[];

// Create a loop starting at the first value and then skipping to each third value.  
for( i=0; i<numArray.length; i+=3) {
  
  // Move those selected values into a new array
  numThrees.push(numArray[i]);
}

document.getElementById("q7").innerHTML += "<p>" + numThrees + "</p>";  




// 8. Write a loop that outputs the following to unique paragraphs:
// #
// ##
// ###
// ####
// #####
// ######
// #######



/*

It helps to count the rows and see that there are 8 of them—so you'll need to create a loop that cycles 8 times.

The hash symbols can be a little intimidating at first, but consider how you can work with strings as you would with numbers. If the variable x is 1, we can go from 1 to 2 by adding x += 1. In the same way, we can go from "#" to "##" by adding a character x += "#".

*/

var hash = "";

for (i=1; i<=8; i++) { 
  hash += "#";
  document.getElementById("q8").innerHTML += "<p>" + hash + "</p>";  

}




// 9. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.


/*

It helps to understand that there are four possible outcomes for every number, so you’ll have to make sure you create an if/else if/else chain for all of these combinations.

Since you need to cycle through all 100 vlaues, you'll need to use a loop.
Remember, the trick of using the remainder (%) operator for checking whether a number is divisible by another number is making sure the remainder is zero.

// if number is divisible by 5, print Buzz
if (num % 5 === 0) {     
  console.log("Buzz"); 
}

Keep in mind the use of the || operator when comparing two conditions (such as finding numbers divisible by both 3 and 5).

Putting all these steps together, you'll find the solution much easier than you may have thought.

*/

for(i=0; i<101; i++){
  if(i % 5 === 0 && i % 3 === 0) {
   document.getElementById("q9").innerHTML += "<p>" + "FizzBuzz" + "</p>";  
  } else if(i % 5 === 0){
	   document.getElementById("q9").innerHTML += "<p>" + "Buzz" + "</p>";  
  } else if (i % 3 === 0){
	   document.getElementById("q9").innerHTML += "<p>" + "Fizz" + "</p>";  
  } else {
	   document.getElementById("q9").innerHTML += "<p>" + i + "</p>";
  }
}


// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.
// Bonus points for using HTML input fields, radio buttons, etc. 


/* We created a very detailed tutorial for this project for the Learn to Code series. You can find the full tutorial here: http://workshops.galvanize.com/learn-to-code/2-js-project.html */





// ADVANCED TRACK
// 16. Write a conditional statement to find the largest of the numbers in the array provided.
var largestNum = [-5, -2, -6, 0, -1]


var numberBlock = [-5, -2, -6, 0, -1]

var biggestNum = numberBlock[0];

for(i=0; i<numberBlock.length; i++){
  if(numberBlock[i] > biggestNum){
    biggestNum = numberBlock[i]
  }
}

document.getElementById("q16").innerHTML += "The largest number is " + biggestNum;





// HEADS OR TAILS?
// 17. Use the following variable for your coin flip action:
       var coin = Math.floor(Math.random() * 2);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)


var coin = Math.floor(Math.random() * 2);

var sides = ["heads", "tails"];

var result = sides[coin];

document.getElementById("q17").innerHTML += result;





// 18. Use a do/while loop to keep flipping the coin until you get tails.

var coin = Math.floor(Math.random() * 2);
var sides = ["heads", "tails"];
var result = sides[coin];

while (result === "heads") {
  var coin = Math.floor(Math.random() * 2);
  if (coin === 1){
    result = "heads";
	document.getElementById("q18").innerHTML += "<p>Heads..bummer..</p>";
  } else {
    result = "tails";
    document.getElementById("q18").innerHTML += "<p>Hurray, you got tails!</p>";
  }
}


// CHESS BOARD
// 19. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #



/*
To solve this problem, it helps to understand that the string can be built by starting with an empty one ("") and repeatedly adding characters to it. A newline character is written as "\n", and this simple will push the additional content within the string to a new line.

To work within the two dimensions needed to solve this probelm, you will need a loop inside of a loop. Put curly braces around the bodies of both loops to make it easy to see where they start and end. Try to properly indent these bodies. The order of the loops must follow the order in which we build up the string (line by line, left to right, top to bottom). So the outer loop handles the lines and the inner loop handles the characters on a line.
You’ll need two variables to track your progress. To know whether to put a space or a hash sign at a given position, you could test whether the sum of the two counters is even (% 2).

*/

var size = 20;

var board = "";
for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ( (x+y) % 2 == 0){
      board += " ";
    }
    else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);



// 20. When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.

var size = 20;

var board = "";
for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ( (x+y) % 2 == 0){
      board += " ";
    }
    else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);


/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction, 
but the next step is coming up with your own arrangements to solve 
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates! 
 
Also, consider how you can add/remove CSS styles to create added presentation with the results. 

*/