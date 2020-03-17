"use strict"; // leave this line here :)

// Keep this function definition in order to test expected vs. actual results
const assert = function(actual, expected, message = "") {

    // This compares primitive values and collections. If they differ, throw an error.
    if(JSON.stringify(actual) !== JSON.stringify(expected)) {
        console.error('[assert] expected:    ' + expected)
        console.error('[assert] instead got: ' + actual)
        throw Error("Assert failed in " + message);
    }
};


// Keep this function here in order to add correct questions to the counter
function addToDone(message) {
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(message);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    node.classList.add("finished");
    document.querySelector(".correct ul").appendChild(node);
    document.querySelector("#count").innerHTML = document.querySelectorAll('.finished').length + " of 101";
}


// Welcome to 101 Exercises in JS
// If you get "ReferenceError: someVariableName is not defined", that means you need to create a variable

// Exercise #0, Example Problem:
// Example problem setup: Create a variable named doingJSRightNow and assign it the boolean true.
// The line below creates the variable named doingJSRightNow and assigns the boolean value true
// To complete Exercise #0, uncomment the following line of JS
// var doingJSRightNow = true

var doingJSRightNow = true

// The lines below will test your answer. If you see an error, then it means that your answer is incorrect or incomplete.
assert(doingJSRightNow, true, "Exercise 0");
addToDone("Exercise 0 is correct");




//  Exercise 1
// On the line below, create a variable named onMarsRightNow and assign it the boolean value of false

var onMarsRightNow = false;

assert(onMarsRightNow, false, "Exercise 1");
addToDone("Exercise 1 is correct.");



// Exercise 2
// Create a variable named fruits and assign it an array of strings containing the following fruits.
// mango, banana, guava, kiwi, and strawberry.

var fruits= ["mango, banana, guava, kiwi, strawberry"];

assert(fruits, ["mango", "banana", "guava", "kiwi", "strawberry"], "Exercise 2");
addToDone("Exercise 2 is correct.");



//  Exercise 3
//  Create a variable named vegetables and assign it an array of fruits containing the following vegetable names as strings:
//  eggplant, broccoli, carrot, cauliflower, and zucchini

var vegetables = ["eggplant, broccoli, carrot, cauliflower, zucchini"];

assert(vegetables, ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"], "Exercise 3");
addToDone("Exercise 3 is correct.");



// Exercise 4
// Create a variable named numbers and assign it an array of numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

assert(numbers, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "Exercise 4");
addToDone("Exercise 4 is correct.");


// Exercise 5
// Add the string "tomato" to the end of the fruits array.
// *Hint* Recommend finding and using a built-in JS operation to add to an array rather than recreating the array.


var fruits= ["mango, banana, guava, kiwi, strawberry, tomato"];


assert(fruits, ["mango", "banana", "guava", "kiwi", "strawberry", "tomato"], "Exercise 5");
addToDone("Exercise 5 is correct");




// Exercise 6
// add the string "tomato" onto the end of the vegetables array.
// Recommend using the built-in JS operation to add to an array.

var vegetables = ["eggplant, broccoli, carrot, cauliflower, zucchini, tomato"];


assert(vegetables,["eggplant", "broccoli", "carrot", "cauliflower", "zucchini", "tomato"], "Exercise 6");
addToDone("Exercise 6 is correct")



// Exercise 7
// Given the array of numbers defined below, reverse the array of numbers that you created above.
var someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

someNumbers.reverse();

assert(someNumbers, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], "Exercise 7")
addToDone("Exercise 7 is correct")




// Exercise 8
// Sort the vegetables in alphabetical order. Recommend finding a way to sort the array with a built-in method

vegetables.sort();

assert(vegetables, ['broccoli', 'carrot', 'cauliflower', 'eggplant', 'tomato', 'zucchini'], "Exercise 8")
addToDone("Exercise 8 is correct.")



// Exercise 9
// Write the code necessary to sort the fruits in reverse alphabetical order

fruits.sort(function(a, b){return b-a});

assert(fruits, ['tomato', 'strawberry', 'mango', 'kiwi', 'guava', 'banana'], "Exercise 9")
addToDone("Exercise 9 is correct.")



// Exercise 10
// Write the code necessary to produce a single array that holds all fruits then all vegetables in the order as they were sorted above.
// Assign the result to a variable named fruitsAndVeggies.
// *hint* the search engine search here would be "how to combine two arrays in JavaScript", for example.

var fruitsAndVeggies = fruits.concat(vegetables)

assert(fruitsAndVeggies, ['tomato', 'strawberry', 'mango', 'kiwi', 'guava', 'banana', 'broccoli', 'carrot', 'cauliflower', 'eggplant', 'tomato', 'zucchini'], "Exercise 10")
addToDone("Exercise 10 is correct")



// This function generates a random number that is both positive and even
function randomPositiveEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 !== 0) {
        return randomPositiveEvenNumber()
    }

    return randomNumber;
}

// this function generates a random number that is both positive and odd
function randomPositiveOddNumber() {
    var randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 === 0) {
        return randomPositiveOddNumber();
    }

    return randomNumber;
}

// this function generates a random number that is both negative and even.
function randomNegativeEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if(randomNumber % 2 === 0) {
        return randomNumber;
    }

    return randomNegativeEvenNumber();
}

// this function generates a random number that is both negative and odd.
function randomNegativeOddNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if(randomNumber % 2 === 0) {
        return randomNegativeOddNumber();
    }

    return randomNumber;
}

// The next 4 lines create variables that hold these generated random numbers
var positiveEvenNumber = randomPositiveEvenNumber()
var positiveOddNumber = randomPositiveOddNumber();
var negativeEvenNumber = randomNegativeEvenNumber();
var negativeOddNumber = randomNegativeOddNumber();

// Writing functions
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions for help with writing functions
// Be sure to return values from your function definitions. The assert statements will call/run your function(s) for you.


// Example function defintion:
// Write a sayHello function that adds the string "Hello, " to the beginning and "!" to the end of any given input.
function sayHello(name) {
    return "Hello, " + name + "!";
}

assert(sayHello("Jane"), "Hello, Jane!");
assert(sayHello("Pat"), "Hello, Pat!");
assert(sayHello("Astrud"), "Hello, Astrud!");
assert(sayHello("June"), "Hello, June!");
assert(sayHello("World"), "Hello, World!");


// Heres another example function definition
// This plusTwo function takes in a variable and adds the number 2 to it.
function plusTwo(x) {
    return x + 2;
}

assert(plusTwo(3), 5, "3 plus 2 is five")
assert(plusTwo(-2), 0, "-2 plus 2 is zero")
assert(plusTwo(0), 2, "zero plus 2 is two")



// Exercise 11
// Write a function definition for a function named addOne that takes in a number and returns that number plus one

function addOne(x) {
    return x + 1;
}

assert(addOne(2), 3, "Exercise 11");
assert(addOne(0), 1, "Exercise 11");
assert(addOne(positiveEvenNumber), positiveEvenNumber + 1, "Exercise 11");
assert(addOne(negativeOddNumber), negativeOddNumber + 1, "Exercise 11");
addToDone("Exercise 11 is correct.")





// Exercise 12
// Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.



assert(isPositive(positiveOddNumber), true, "Exercise 12");
assert(isPositive(positiveEvenNumber), true, "Exercise 12");
assert(isPositive(negativeOddNumber), false, "Exercise 12");
assert(isPositive(negativeEvenNumber), false, "Exercise 12");
addToDone("Exercise 12 is correct.")

function isPositive(num) {
    return (num > 0)
}


// Exercise 13
// Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.



assert(isNegative(positiveOddNumber), false, "Exercise 13");
assert(isNegative(positiveEvenNumber), false, "Exercise 13");
assert(isNegative(negativeOddNumber), true, "Exercise 13");
assert(isNegative(negativeEvenNumber), true, "Exercise 13");
addToDone("Exercise 13 is correct.")


function isNegative (num) {
    return (num < 0)
}

// Exercise 14
// Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.

assert(isOdd(positiveOddNumber), true, "Exercise 14");
assert(isOdd(positiveEvenNumber), false, "Exercise 14");
assert(isOdd(negativeOddNumber), true, "Exercise 14");
assert(isOdd(negativeEvenNumber), false, "Exercise 14");
addToDone("Exercise 14 is correct.")

function isOdd(x) {
    if (x %2 == 0)
        return false;
    else
        return true;
}


// Exercise 15
// Write a function definition named isEven that takes in a number and returns true or false if that number is even.

assert(isEven(2), true, "Exercise 15");
assert(isEven(positiveOddNumber), false, "Exercise 15");
assert(isEven(positiveEvenNumber), true, "Exercise 15");
assert(isEven(negativeOddNumber), false, "Exercise 15");
assert(isEven(negativeEvenNumber), true, "Exercise 15");
addToDone("Exercise 15 is correct.")

function isEven(x) {
    if (x % 2 == 0)
        return true;
    else
        return false;
}



// Exercise 16
// Write a function definition named identity that takes in any input and returns that input. Don't overthink this one!

assert(identity(fruits), fruits, "Exercise 16");
assert(identity(vegetables), vegetables, "Exercise 16");
assert(identity(positiveOddNumber), positiveOddNumber, "Exercise 16");
assert(identity(positiveEvenNumber), positiveEvenNumber, "Exercise 16");
assert(identity(negativeOddNumber), negativeOddNumber, "Exercise 16");
assert(identity(negativeEvenNumber), negativeEvenNumber, "Exercise 16");
addToDone("Exercise 16 is correct.")

function identity (x) {
    return (x)
}



// Exercise 17
// Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd



assert(isPositiveOdd(3), true, "Exercise 17");
assert(isPositiveOdd(positiveOddNumber), true, "Exercise 17");
assert(isPositiveOdd(positiveEvenNumber), false, "Exercise 17");
assert(isPositiveOdd(negativeOddNumber), false, "Exercise 17");
assert(isPositiveOdd(negativeEvenNumber), false, "Exercise 17");
addToDone("Exercise 17 is correct.")

function isPositiveOdd (x) {
    return (x % 2 == 0 && x > 0)
}

// Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even

assert(isPositiveEven(4), true, "Exercise 18" );
assert(isPositiveEven(positiveOddNumber), false, "Exercise 18");
assert(isPositiveEven(positiveEvenNumber), true, "Exercise 18");
assert(isPositiveEven(negativeOddNumber), false, "Exercise 18");
assert(isPositiveEven(negativeEvenNumber), false, "Exercise 18");
addToDone("Exercise 18 is correct.")

function isPositiveEven (x) {
    return (x % 2 !== 0 && x < 0)
}

// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.

assert(isNegativeOdd(-3), true, "Exercise 19" );
assert(isNegativeOdd(positiveOddNumber), false, "Exercise 19");
assert(isNegativeOdd(positiveEvenNumber), false, "Exercise 19");
assert(isNegativeOdd(negativeOddNumber), true, "Exercise 19");
assert(isNegativeOdd(negativeEvenNumber), false, "Exercise 19");
addToDone("Exercise 19 is correct.")

function isNegativeOdd(x) {
    return (x % 2 == 0 && num < 0);
}
// Exercise 20
// Write a function definition named isNegativeEven that takes in a number and returns true or false if the value is both less than zero and even.

    assert(isNegativeEven(-4), true, "Exercise 20" );
    assert(isNegativeEven(positiveOddNumber), false, "Exercise 20");
    assert(isNegativeEven(positiveEvenNumber), false, "Exercise 20");
    assert(isNegativeEven(negativeOddNumber), false, "Exercise 20");
    assert(isNegativeEven(negativeEvenNumber), true, "Exercise 20");
    addToDone("Exercise 20 is correct.")

    function isNegativeEven (x) {
        return (x % 2 === 0 && x < 0)
    }


// Exercise 21
// Write a function definition named half that takes in a number and returns half the provided number.

    assert(half(4), 2, "Exercise 21");
    assert(half(5), 2.5, "Exercise 21");
    assert(half(positiveOddNumber), positiveOddNumber / 2, "Exercise 21");
    assert(half(positiveEvenNumber), positiveEvenNumber / 2, "Exercise 21");
    assert(half(negativeOddNumber), negativeOddNumber / 2, "Exercise 21");
    assert(half(negativeEvenNumber), negativeEvenNumber / 2, "Exercise 21");
    addToDone("Exercise 21 is correct.")

    function half (num) {
        return num / 2
    }


// Exercise 22
// Write a function definition named double that takes in a number and returns double the provided number.

    assert(double(4), 8, "Exercise 22");
    assert(double(5), 10, "Exercise 22");
    assert(double(positiveOddNumber), positiveOddNumber * 2, "Exercise 22");
    assert(double(positiveEvenNumber), positiveEvenNumber * 2, "Exercise 22");
    assert(double(negativeOddNumber), negativeOddNumber * 2, "Exercise 22");
    assert(double(negativeEvenNumber), negativeEvenNumber * 2, "Exercise 22");
    addToDone("Exercise 22 is correct.")

    function double (num) {
        return num * 2
    }


// Exercise 23
// Write a function definition named triple that takes in a number and returns triple the provided number.

    assert(triple(4), 12, "Exercise 23");
    assert(triple(5), 15, "Exercise 23");
    assert(triple(positiveOddNumber), positiveOddNumber * 3, "Exercise 23");
    assert(triple(positiveEvenNumber), positiveEvenNumber * 3, "Exercise 23");
    assert(triple(negativeOddNumber), negativeOddNumber * 3, "Exercise 23");
    assert(triple(negativeEvenNumber), negativeEvenNumber * 3, "Exercise 23");
    addToDone("Exercise 23 is correct.")


    function triple (num) {
        return num * 3
    }



// Exercise 24
// Write a function definition named reverseSign that takes in a number and returns the provided number but with the sign reversed.

    assert(reverseSign(4), -4, "Exercise 24");
    assert(reverseSign(-5), 5, "Exercise 24");
    assert(reverseSign(positiveOddNumber), positiveOddNumber * -1, "Exercise 24");
    assert(reverseSign(positiveEvenNumber), positiveEvenNumber * -1, "Exercise 24");
    assert(reverseSign(negativeOddNumber), negativeOddNumber * -1, "Exercise 24");
    assert(reverseSign(negativeEvenNumber), negativeEvenNumber * -1, "Exercise 24");
    addToDone("Exercise 24 is correct.")

    function reverseSign (num) {
        return num * -1
    }


// Exercise 25
// Write a function definition named absoluteValue that takes in a number and returns the absolute value of the provided number

    assert(absoluteValue(4), 4, "Exercise 25");
    assert(absoluteValue(-5), 5, "Exercise 25");
    assert(absoluteValue(positiveOddNumber), positiveOddNumber, "Exercise 25");
    assert(absoluteValue(positiveEvenNumber), positiveEvenNumber, "Exercise 25");
    assert(absoluteValue(negativeOddNumber), negativeOddNumber * -1, "Exercise 25");
    assert(absoluteValue(negativeEvenNumber), negativeEvenNumber * -1, "Exercise 25");
    addToDone("Exercise 25 is correct.")

    function absoluteValue (num){
        var absolute = Math.abs(num);
        return absolute
    }


// Exercise 26
// Write a function definition named isMultipleOfThree that takes in a number and returns true or false if the number is evenly divisible by 3.

    assert(isMultipleOfThree(3), true, "Exercise 26");
    assert(isMultipleOfThree(15), true, "Exercise 26");
    assert(isMultipleOfThree(9), true, "Exercise 26");
    assert(isMultipleOfThree(4), false, "Exercise 26");
    assert(isMultipleOfThree(10), false, "Exercise 26");
    addToDone("Exercise 26 is correct.")


    function isMultipleOfThree (num) {
        return num % 3 === 0;
    }


// Exercise 27
// Write a function definition named isMultipleOfFive that takes in a number and returns true or false if the number is evenly divisible by 5.

    assert(isMultipleOfFive(3), false, "Exercise 27");
    assert(isMultipleOfFive(15), true, "Exercise 27");
    assert(isMultipleOfFive(9), false, "Exercise 27");
    assert(isMultipleOfFive(4), false, "Exercise 27");
    assert(isMultipleOfFive(10), true, "Exercise 27");
    addToDone("Exercise 27 is correct.")

    function isMultipleOfFive (num) {
        return num % 5 === 0;
    }


// Exercise 28
// Write a function definition named isMultipleOfBothThreeAndFive that takes in a number and returns true or false if the number is evenly divisible by both 3 and 5.

    assert(isMultipleOfBothThreeAndFive(15), true, "Exercise 28");
    assert(isMultipleOfBothThreeAndFive(45), true, "Exercise 28");
    assert(isMultipleOfBothThreeAndFive(3), false, "Exercise 28");
    assert(isMultipleOfBothThreeAndFive(9), false, "Exercise 28");
    assert(isMultipleOfBothThreeAndFive(4), false, "Exercise 28");
    addToDone("Exercise 28 is correct.")


    function isMultipleOfBothThreeAndFive (num) {
        return num % 3 === 0 && num % 5 === 0;
    }


// Exercise 29
// Write a function definition named square that takes in a number and returns the number times itself.

    assert(square(3), 9, "Exercise 29");
    assert(square(2), 4, "Exercise 29");
    assert(square(9), 81, "Exercise 29");
    assert(square(positiveOddNumber), positiveOddNumber * positiveOddNumber, "Exercise 29");
    addToDone("Exercise 29 is correct.")

    function square (num) {
        return num * num
    }

// Exercise 30
// Write a function definition named add that takes in two numbers and returns the sum.


    assert(add(3, 2), 5, "Exercise 30");
    assert(add(10, -2), 8, "Exercise 30");
    assert(add(5, 7), 12, "Exercise 30");
    addToDone("Exercise 30 is correct.")

    function add (num1, num2) {
        return num1 + num2;
    }



// Exercise 31
// Write a function definition named cube that takes in a number and returns the number times itself, times itself.

    assert(cube(3), 27, "Exercise 31");
    assert(cube(2), 8, "Exercise 31");
    assert(cube(5), 125, "Exercise 31");
    assert(cube(positiveOddNumber), positiveOddNumber * positiveOddNumber * positiveOddNumber, "Exercise 31");
    addToDone("Exercise 31 is correct.")


    function cube (num) {
        return Math.pow(num, 3);
    }

// Exercise 32
// Write a function definition named squareRoot that takes in a number and returns the square root of the provided number


    assert(squareRoot(4), 2.0, "Exercise 32");
    assert(squareRoot(64), 8.0, "Exercise 32");
    assert(squareRoot(81), 9.0, "Exercise 32");
    addToDone("Exercise 32 is correct.")

    function squareRoot (num) {
        return Math.sqrt(num);
    }

// Exercise 33
// Write a function definition named subtract that takes in two numbers and returns the first minus the second argument.


    assert(subtract(8, 6), 2, "Exercise 33");
    assert(subtract(27, 4), 23, "Exercise 33");
    assert(subtract(12, 2), 10, "Exercise 33");
    addToDone("Exercise 33 is correct.")


    function subtract (num1, num2) {
        return num1 - num2;
    }

// Exercise 34
// Write a function definition named multiply that takes in two numbers and returns the first times the second argument.

    assert(multiply(2, 1), 2, "Exercise 34");
    assert(multiply(3, 5), 15, "Exercise 34");
    assert(multiply(5, 2), 10, "Exercise 34");
    addToDone("Exercise 34 is correct.")

    function multiply (num1, num2) {
        return num1 * num2;
    }


// Exercise 35
// Write a function definition named divide that takes in two numbers and returns the first argument divided by the second argument.


    assert(divide(27, 9), 3, "Exercise 35");
    assert(divide(15, 3), 5, "Exercise 35");
    assert(divide(5, 2), 2.5, "Exercise 35");
    assert(divide(10, 2), 5, "Exercise 35");
    addToDone("Exercise 35 is correct.")

    function divide (num1, num2) {
        return num1 / num2;
    }


// Exercise 36
// Write a function definition named quotient that takes in two numbers and returns the quotient of dividing the first argument by the second argument.

    assert(quotient(27, 9), 3, "Exercise 36");
    assert(quotient(5, 2), 2, "Exercise 36");
    assert(quotient(10, 3), 3, "Exercise 36");
    addToDone("Exercise 36 is correct.")

    function quotient (num1, num2) {
        return Math.floor(num1 / num2);
    }


// Exercise 37
// Write a function definition named remainder that takes in two numbers and returns the remainder of first argument divided by the second argument.

    assert(remainder(3, 3), 0, "Exercise 37");
    assert(remainder(5, 2), 1, "Exercise 37");
    assert(remainder(7, 5), 2, "Exercise 37");
    addToDone("Exercise 37 is correct.")

    function remainder (num1, num2) {
        return Math.round(num1 % num2);
    }




// Exercise 38
// Write a function definition named sumOfSquares that takes in two numbers, squares each number, then returns the sum of both squares.

    assert(sumOfSquares(3, 2), 13, "Exercise 38");
    assert(sumOfSquares(5, 2), 29, "Exercise 38");
    assert(sumOfSquares(2, 4), 20, "Exercise 38");
    addToDone("Exercise 38 is correct.")


    function sumOfSquares (num1, num2) {
        var sqr1 = Math.pow(num1, 2);
        var sqr2 = Math.pow(num2, 2);
        return sqr1 + sqr2;
    }



// Exercise 39
// Write a function definition named timesTwoPlusThree that takes in a number, multiplies it by two, adds 3 and returns the result.

    assert(timesTwoPlusThree(0), 3, "Exercise 39");
    assert(timesTwoPlusThree(1), 5, "Exercise 39");
    assert(timesTwoPlusThree(2), 7, "Exercise 39");
    assert(timesTwoPlusThree(3), 9, "Exercise 39");
    assert(timesTwoPlusThree(5), 13, "Exercise 39");
    addToDone("Exercise 39 is correct.")

    function timesTwoPlusThree (num) {
        var mul = num * 2;
        return mul + 3;
    }

// Exercise 40
// Write a function definition named areaOfRectangle that takes in two numbers and returns the product.

    assert(areaOfRectangle(1, 3), 3, "Exercise 40");
    assert(areaOfRectangle(5, 2), 10, "Exercise 40");
    assert(areaOfRectangle(2, 7), 14, "Exercise 40");
    assert(areaOfRectangle(5.3, 10.3), 54.59, "Exercise 40");
    addToDone("Exercise 40 is correct.")

    function areaOfRectangle (width, length) {
        return width * length
    }



// Exercise 41
// Write a function definition named areaOfCircle that takes in a number representing a circle's radius and returns the area of the circle


    assert(areaOfCircle(3), 28.274333882308138, "Exercise 41");
    assert(areaOfCircle(5), 78.53981633974483, "Exercise 41");
    assert(areaOfCircle(7), 153.93804002589985, "Exercise 41");
    addToDone("Exercise 41 is correct.")

    function areaOfCircle (radius) {
        return Math.PI * Math.pow(radius, 2);
    }


// Exercise 42
// Write a function definition named circumference that takes in a number representing a circle's radius and returns the circumference.

    assert(circumference(3), 18.84955592153876, "Exercise 42");
    assert(circumference(5), 31.41592653589793, "Exercise 42");
    assert(circumference(7), 43.982297150257104, "Exercise 42");
    addToDone("Exercise 42 is correct.")

    function circumference (radius) {
        return (2 * Math.PI) * radius;
    }



// Exercise 43
// Write a function definition named isVowel that takes in value and returns true if the value is a, e, i, o, u in upper or lower case.

    assert(isVowel("a"), true, "Exercise 43");
    assert(isVowel("U"), true, "Exercise 43");
    assert(isVowel("banana"), false, "Exercise 43");
    assert(isVowel("Q"), false, "Exercise 43");
    assert(isVowel("y"), false, "Exercise 43");
    addToDone("Exercise 43 is correct.")

    function isVowel (str) {
        var noCase = str.toLowerCase();
        return noCase === 'a' || noCase === 'e'|| noCase === 'i' || noCase === 'o' || noCase === 'u'
    }
// Exercise 44
// Write a function definition named hasVowels that takes in value and returns true if the string contains any vowels.

    assert(hasVowels("banana"), true, "Exercise 44");
    assert(hasVowels("ubuntu"), true, "Exercise 44");
    assert(hasVowels("QQQQ"), false, "Exercise 44");
    assert(hasVowels("wyrd"), false, "Exercise 44");
    addToDone("Exercise 44 is correct.")

    function hasVowels(str) {
        var vowels = 'aeiou';
        var vcount = 0;
        for (var x = 0; x < str.length; x++) {
            if (vowels.toLowerCase().indexOf(str[x]) !== -1) {
                vcount++;
            }}
        return vcount > 0;
    }

// Write a function definition named countVowels that takes in value and returns the count of the nubmer of vowels in a sequence.

    assert(countVowels("banana"), 3, "Exercise 45");
    assert(countVowels("ubuntu"), 3, "Exercise 45");
    assert(countVowels("mango"), 2, "Exercise 45");
    assert(countVowels("QQQQ"), 0, "Exercise 45");
    assert(countVowels("wyrd"), 0, "Exercise 45");
    addToDone("Exercise 45 is correct.")


    function countVowels (str) {
        var vowels = 'aeiou';
        var vcount = 0;
        for (var x = 0; x < str.length; x++) {
            if (vowels.toLowerCase().indexOf(str[x]) !== -1) {
                vcount++;
            }}
        return vcount;
    }



// Exercise 46
// Write a function definition named removeVowels that takes in string and returns the string without any vowels

    assert(removeVowels("banana"), "bnn", "Exercise 46");
    assert(removeVowels("ubuntu"), "bnt", "Exercise 46");
    assert(removeVowels("mango"), "mng", "Exercise 46");
    assert(removeVowels("QQQQ"), "QQQQ", "Exercise 46");
    addToDone("Exercise 46 is correct.")

    function removeVowels (str) {
        var newStr = "";
        for (var x = 0; x < str.length; x++) {
            if (!isVowel(str[x])) {
                newStr += str[x]
            }
        }
        console.log(newStr)
        return newStr;
    }
// Exercise 47
// Write a function definition named startsWithVowel that takes in string and true if the string starts with a vowel

        assert(startsWithVowel("ubuntu"), true, "Exercise 47");
        assert(startsWithVowel("banana"), false, "Exercise 47");
        assert(startsWithVowel("mango"), false, "Exercise 47");
        addToDone("Exercise 47 is correct.")

        function startsWithVowel (str) {

            if(!isVowel(str[0])){
                return false;
            }
            else {
                return true;
            }
        }


// Exercise 48
// Write a function definition named endsWithVowel that takes in string and true if the string ends with a vowel


        assert(endsWithVowel("ubuntu"), true, "Exercise 48");
        assert(endsWithVowel("banana"), true, "Exercise 48");
        assert(endsWithVowel("mango"), true, "Exercise 48");
        assert(endsWithVowel("spinach"), false, "Exercise 48");
        addToDone("Exercise 48 is correct.")


        function endsWithVowel (str) {

            var newStr = str.split("");
            var reverseArray = newStr.reverse();
            var jString = reverseArray.join("");
            if(!isVowel(jString[0])){
                return false;
            }else {
                return true;
            }
        }


// Exercise 49
// Write a function definition named startsAndEndsWithVowel that takes in string and returns true if the string starts and ends with a vowel

        assert(startsAndEndsWithVowel("ubuntu"), true, "Exercise 49");
        assert(startsAndEndsWithVowel("banana"), false, "Exercise 49");
        assert(startsAndEndsWithVowel("mango"), false, "Exercise 49");
        addToDone("Exercise 49 is correct.")

        function startsAndEndsWithVowel(str) {
            if(!startsWithVowel(str[0]) && !endsWithVowel(str[0])){
                return false;
            }else {
                return true;
            }
        }


// Exercise 50
// Write a function definition named first that takes in sequence and returns the first value of that sequence.

function first (input) {
    return input[0];}

        assert(first("ubuntu"), "u", "Exercise 50");
        assert(first([1, 2, 3]), 1, "Exercise 50");
        assert(first(["JS", "is", "awesome"]), "JS", "Exercise 50");
        addToDone("Exercise 50 is correct.")
