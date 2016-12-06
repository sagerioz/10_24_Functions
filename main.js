/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");




// 1. Create a function that simply returns a string that says something funny
//    when it is called and then displayed into the HTML page.

function saySomethingStupid() {
    return ('Al Gore rhythms are cool!');
}
document.getElementById("firstButn").addEventListener("click", function() {
    document.getElementById("q1").innerHTML = saySomethingStupid();
});

// 2. Define a function called "divideByTwo".
//    It should accept one parameter within a text field called "number" and
//    submitted when a button is clicked.
//    The function should divide the number by two and
//    then displayed into the HTML page.
function divideByTwo(myNumber) {
    return myNumber / 2;
};
document.getElementById("secondButn").addEventListener("click", function() {
    document.getElementById("q2").innerHTML = divideByTwo(document.getElementById("numberToDivide").value);
});

// 3. Define a function called "greeting".
//    It should accept two parameters within input fields, which will both be first names.
//    The function should display to the HTML page a greeting to both people.

function greeting(name1, name2) {
    return "Hello, " + name1 + " !" + " Hi there, " + name2 + " !";
}

document.getElementById("thirdButn").addEventListener("click", function() {
    var a = document.getElementById('name1').value;
    var b = document.getElementById('name2').value;
    document.getElementById('q3').innerHTML = greeting(a, b);
});


// 4. Create a function that finds the average of 6 numbers passed in when called
//    and returns the value and is then displayed in the HTML page.

var listNum = [2, 4, 77, 32, 23, 765];

function aveNum(array) {
    for (var i = 0; i < array.length; i++) {
        var sum = 0;
        sum += array[i];

    };
    var avg = sum / array.length;
    return avg;
};

document.getElementById("q4").innerHTML += 'A list of numbers to get the average from: ' + listNum;
//
//
document.getElementById("numAverages").addEventListener("click", function() {
    document.getElementById("q4").innerHTML += ' = ' + aveNum(listNum)
});

// 5. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month.
//    Write a function that takes the price per unit and calculates the total for you each month.
//    Since the price of the cashews can change anytime, pass that amount into the function to get your total price.


function myCashewBudget(cashewPrice) {

    return cashewPrice = (cashewPrice * 6);
};
document.getElementById("nutPriceCalc").addEventListener("click", function() {
    document.getElementById("q5").innerHTML = '$ ' + myCashewBudget(document.getElementById("price").value) + ' per month!';

});
// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

function area(length, width) {
    return length * width;
}

function perimeter(length, width) {
    return (length * 2) + (width * 2);
}
document.getElementById("areaCalc").addEventListener("click", function() {
    document.getElementById("q6a").innerHTML = 'The area is ' + area(document.getElementById("length").value, document.getElementById("width").value) + ' ' + document.getElementById("myUnits").value;

});
document.getElementById("periCalc").addEventListener("click", function() {
    document.getElementById("q6b").innerHTML = 'The perimeter is ' + perimeter(document.getElementById("length").value, document.getElementById("width").value) + ' ' + document.getElementById("myUnits").value;

});


// 7. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.


function quarter(number){
  return number * .25;
}
document.getElementById("quarterize").addEventListener("click", function() {
    document.getElementById("q7").innerHTML = 'A quarter of your given number is ' + quarter(document.getElementById("q7input").value);
});

// 8. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, display a statement to the HTML page about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

function sleepings(hours){
 if (hours >= 8){
   return "You got enough rest, good job!";
 }else{
   return "Get some extra rest tonight, sleepyhead!"
 };
}
document.getElementById("q8butn").addEventListener("click", function() {
    document.getElementById("q8").innerHTML = sleepings(document.getElementById("q8input").value);
});


// 9. Develop a function that determines a person's age by asking them for their birth year.
function yourAge(birthYear){
var now = new Date();
 var thisYear = now.getFullYear();
  return (thisYear - birthYear);
}



document.getElementById("q9butn").addEventListener("click", function() {
    document.getElementById("q9").innerHTML = yourAge(document.getElementById("q9input").value);
});
// 10. Write a function that accepts the following array and separates the people into two teams. Display each team within the HTML page.
//    No names next to each other in the array should be on the same team.
teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]
var team1 = [];
var team2 = [];
function teams(array) {


    for (var i = 0; i < array.length; i += 2) {
        team1.push(array[i]);
    }
    for (i = 1; i < array.length; i += 2) {
        team2.push(array[i]);

    };
    return('Team A is: ' + team1 + '<p> Team B is: ' + team2 + '</p>')
    console.log("Team A is: " + team1)
     console.log("Team B is: " + team2)
}

document.getElementById("q10butn").addEventListener("click", function() {
    document.getElementById("q10").innerHTML = teams(teammates);
});

// 11. Allow a user to enter a three digit number.
//     Write a function that adds the numbers together.
//     Hint #1: You need to turn a string into an integer.
//     Hint #2: Strings can be treated as arrays too.

var addThree = document.getElementById("q11input")

function addThreeNums(userInput) {
  console.log(userInput.value);
  console.log(typeof userInput.value);
var splitEm = userInput.value.split('');
console.log(splitEm);
var sum = 0
  for ( i = 0; i < splitEm.length; i++) {

var num = parseInt(splitEm[i]);

    sum += num;

  }
  return sum;
}

document.getElementById("q11butn").addEventListener("click", function() {
  //addThreeNums(addThree)
    document.getElementById("q11").innerHTML = "Your three digit number adds up to :" + addThreeNums(addThree);
});
// function threes(userInput) {
//   var stringSplit = userInput.split("");
//
//   var total = 0;
//   for(i=0; i<stringSplit.length; i++){
//     var num = parseInt(stringSplit[i])
//     total += num;
//   }
//   return "The total is: " + total;
// }
//
//
// var promptInput = prompt("Input a 3 digit number");
// console.log(threes(promptInput));


// 12. You've finally gotten around to counting the change in your piggy bank.
//     Write a function that accepts four parameters from a user (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Understanding the toFixed method will help you with the format.


function piggyBank (pennies, nickles, dimes, quarters){
  var pConvert = parseInt(pennies * .01);
  var nConvert = parseInt(nickles * .05);
  var dConvert = parseInt(dimes * .10);
  var qConvert = parseInt(quarters * .25);
var total = (pConvert + nConvert + dConvert + qConvert);

return total.toFixed(2);
}

//use the button event to grab the data from the html form
document.getElementById("q12butn").addEventListener("click", function() {
 //console.dir(p);
 //console.log(p);
 var p = document.getElementById('q12pennies').value;
 //console.log(typeof p);
 var n = document.getElementById('q12nickles').value;
 var d = document.getElementById('q12dimes').value;
 var q = document.getElementById('q12quarters').value;
 document.getElementById("q12").innerHTML = "Your piggy bank adds up to : $" + piggyBank(p,n,d,q);




});





// ADVANCED TRACK



// A. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.
//
function phoneNum(num) {
    var a = " Error: please re-enter your phone number with area code";

    var numStr = num.toString();
    console.log(typeof numStr);
    if (numStr.length < 10 || numStr.length > 11) {
        console.log('too short or too long' + numStr);
        return a;
    } else if (numStr.length === 11) {
        if (numStr.charAt(0) == 1) {
            var clean = numStr.slice(1, 9);
            return clean;
            console.log('sliced' + numStr);
        } else {
            console.log('bad num' + numStr);
        }
    } else {
        return numStr;
    }

}
//console.log(phoneNum(22222));
document.getElementById("q16butn").addEventListener("click", function() {

    document.getElementById("q16").innerHTML = "Your phone number is :" + phoneNum(document.getElementById('q16input').value);
});

// B. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
// arrayOfAllTheThings = ["one", 23, {
//     thingsWhalesLove: "beaches"
// }, "six hundred", 33, 6834, "5,435"]



// C. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     Display the result in the HTML page.
//     To get the random number rolled by each die, use Math.random and Math.floor.



// D. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.



// E. Write a function that takes a year from a user
//    and reports whether or not it is a leap year.
//    Display the result in the HTML page.
//    Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is. 1900 is not a leapyear, but 2000 is.
