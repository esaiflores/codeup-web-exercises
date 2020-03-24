"use strict";
console.log("hello from loops js");

/*********************************************
 *                   WHILE LOOPS
 *********************************************/
// A while loop will run WHILE a certain condition is true
// while (condition) {
//  code runs.
// }

//TODO TOGETHER: Create a while loop that counts up to 10 (non-inclusive) by 1
// (0, 1, 2...9)

var i = 0

while ( i < 10 ) {
    console.log('First Example: ' +i);
    i++;
}


//TODO TOGETHER: Create a while loop that counts down from 20 to 0 (inclusive) by 1
// (20, 19, 18...0)

var i = 20;

while ( i >= 0) {
    console.log('Count down to 0 from 20: ' -i);
    i-=1;
}




//TODO TOGETHER: Create a while loop that counts up to 20 (inclusive) by 2s (0, 2, 4...)
// (0, 2, 4...20)

var i = 0;

while (i <=20) {
    console.log('Count to 20 by 2s: ' +i);
    i+=2;
}




//TODO: Create a while loop that counts to 100 (inclusive) in increments of ten:
// (10...20...30...)


var i = 10;

while (i <= 100) {
    console.log('Count to 100 by increments of 10: ' + i);
    i += 10;
}



//TODO: Create a while loop that counts down from 50 to 1 (inclusive) in increments of 1:
// (50, 49, 48, 47, 46 .... 1)

var i = 50;

while (i > 0) {

    console.log('Count down to 1 in increments of 1: ' - i);
    i--;
}

/*********************************************
 *               DO-WHILE LOOPS
 *********************************************/
// A do/while loop will run at least once.

// do {
//  // Code to be run.
// } while (condition);


// var i = 10;
//
// while (i < 10) {
// 	console.log('while loop iteration #' + i);
// 	i++;
// }


// TODO TOGETHER: Why doesnt the example above run?


// TODO TOGETHER: Refactor the example above using a do-while loop. What behavior do we notice?







//TODO TOGETHER: Create a do-while loop that asks the user to confirm: "Would you like to exit?"






//TODO TOGETHER: Create a do-while loop that counts up to 20 (inclusive) by 2s (0, 2, 4...)
// (0, 2, 4...20)






//TODO: Create a do-while loop that prompts the user for a color and continues to prompt until the string passed is "blue"

do {
    var userPrompt = prompt('enter a color').toLowerCase();
    console.log('user prompt: ' + userPrompt);
} while (userPrompt !== 'blue');






/*********************************************
 *               FOR LOOPS
 *********************************************/
// For loops: Loops that are designed to run a given number of times.

// for (/*initialization*/; /*condition*/; /*increment*/) {
// 	// body
// }

//TODO TOGETHER: Explore basic for loop syntax






// TODO TOGETHER: Write a for loop that loops through numbers 0 - 5 (inclusive);





// TODO TOGETHER: Why are loops beneficial?


// TODO TOGETHER: Console.log each color from the array randomColors
var randomColors = ["red","orange", "yellow", "blue", "green"]

// Without using loops.

// Using a for loop.

for (var i=0; i < randomColors.length; i++) {
    console.log(i)
    console.log('using for loop to iterate through colors: ' + randomColors[i]);
}


// TODO TOGETHER: Using a for loop, log all even numbers 0 - 100;

for (var i = 0; i <=100; i++) {
    if (i % 2 === 0) {
        console.log('Logging all even numbers 0-100: ' + i);
    }
}





// TODO: Using a for loop, log all numbers divisible by 5, from 0 - 100;

for (var i = 0; i <=100; i++) {
    if (i % 5 === 0) {
        console.log('Logging all even numbers 0-100: ' + i);
    }
}





// TODO: Using a for loop, complete the FizzBuzz challenge:
//  Your program should count up to 100.
//  For numbers divisible by 3, log "Fizz"
//  For numbers divisible by 5, log "Buzz"
//  If divisible by 3 and 5, log "FizzBuzz"
//  All other cases, just log the number.

for (var i = 1; i<=100; i++) {
    if (i % 15 ===0) {
        console.log('FizzBuzz ' + i);
    }else if (i % 3 === 0) {
        console.log('Fizz ' + i );
    }else if (i % 5 ===0) {
        console.log('Buzz ' + i);
    }else {
        console.log(i)
    }
}







/*********************************************
 *              BREAKS & CONTINUES
 *********************************************/
// We can get a loop to stop using break;




// We can get an iteration to skip using continue;

