"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


var enterNumber = confirm('Do you want to enter a number?');

if (enterNumber === true) {
    var number = prompt('What number would you like to enter?');

    if (isNaN(number)) {
        alert('That is not a number')
    } else {
        NumberEvenOrOdd(number);
        numberPlusHundred(number);
        NegativeOrPositive(number);
    }
}else {
    alert(" I don't even care (: " );
}

function NumberEvenOrOdd(number) {

    if (number % 2 ===1) {
        return alert('Your number is odd son');
    } else {
        return alert('Your number is even boi');
    }
}

function numberPlusHundred(number) {
    return alert('Your number plus one hundred is ' + (+number + 100));

}

function NegativeOrPositive(number) {
    if (number > 0) {
        return alert(number + " is a positive number");
    } else {
        return alert(number + " is a negative number");
    }
}


/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor(color) {
    if(color === 'red') {
        return "firetrucks are red";
    } else if(color === 'orange') {
        return "pumpkins are orange";
    }else if (color === 'yellow') {
        return "Bananas are yellow";
    }else if (color === 'green') {
        return "The Hulk is green";
    }else if (color === 'blue') {
        return "The ocean reflects blue light";
    }else if (color === 'indigo'){
        return "Had to look indigo up";
    }else if (color === 'violet') {
        return "My frat color are violet";
    }else {
        return "You got me there boss, don't know that one";
    }

}
analyzeColor("blue");
console.log(analyzeColor("red"));







/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */



function analyzeColor(color) {
    switch (color) {
        case 'red':
            return "Firetrucks are red";

        case 'orange':
            return "pumpkins are orange";

        case 'yellow':
            return "Bananas are yellow";

        case 'green':
            return "The Hulk is green";

        case 'blue':
            return "The ocean reflects blue light";

        case 'indigo':
            return "Had to look up indigo";

        case 'violet':
            return "My frat colors are violet";


        default:
            return "You got me there boss, don't know that one";

    }

}

console.log(analyzeColor("blue"));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var askForColor = prompt('Please enter a color');
var result = analyzeColor(askForColor);
console.log(result);
alert(result);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calculateTotal(luckyNumber, totalAmount) {

    var discount;

    if(luckyNumber === 0) {
        discount = 0;
    }else if(luckyNumber === 1) {
        discount = .1
    }else if (luckyNumber === 2){
        discount = .25;
    }else if (luckyNumber === 3){
        discount = .35;
    }else if (luckyNumber === 4) {
        discount = .50;
    }else if (luckyNumber === 5){
        discount = 1;
    }else {
        discount = 0;
    }

    var discountAmount = totalAmount * discountPercent;
    return totalAmount - discountAmount;

}

console.log(calculateTotal(4, 100),50);





/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6


var luckyNumber = Math.floor(Math.random() * 6);
var whatIsTheTotal = +prompt('Enter total bill');
var CalculatorMachine = calculateTotal(luckyNumberGen, whatIsYourTotal);
alert("Your lucky number is " + luckyNumberGen);
alert ("Your initial price before discount is " + whatIsYourTotal);
alert('Your final price is ' + CalculatorMachine);

