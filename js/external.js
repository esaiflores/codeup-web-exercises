'use strict';

// console.log('Hello from external JS.');
//
// alert("Welcome to my website!");
//
//
//
//
// var color = prompt("What is your favorite color?");
// var response = "Great, " + color + " is my favorite color too!";
// alert(response);

//
// var rentMovies = prompt("How many days total would you like to rent little mermaid, Brother Bear, and Hercules?");
// var movies = rentMovies * 3;
// var answer1 = "Great, that will be " + movies + " dollars for all those days (:";
// alert(answer1);

//
// var googleRate = prompt("What is your rate for Google?");
// googleRate = parseInt(googleRate);
//
// var amazonRate = prompt("What is your rate for Amazon?");
// amazonRate = parseInt(amazonRate);
//
// var facebookRate = prompt("What is your rate for Facebook?");
// facebookRate = parseInt(facebookRate);
//
// // next part
//
// var googleHours = prompt("How many hours did you work at Google this week?");
// googleHours = parseInt(googleHours);
//
// var amazonHours = prompt("How many hours did you work at Amazon this week?");
// amazonHours = parseInt(amazonHours);
//
// var facebookHours = prompt("How many hours did you work at Facebook this week?");
// facebookHours = parseInt(facebookHours);
//
// var totalDollars = (facebookRate * facebookHours) + (amazonRate * amazonHours) + (googleRate + googleHours);
//
// alert('Total Dollars: $' + totalDollars);

var isClassFull = false;
var isClassConflict = false;

var canAttendClass = (!isClassFull && !isClassConflict);
alert('student can attend class ' + 'canAttendClass');

var numberOfItems = prompt('How many items do you want to buy?');
numberOfItems = parseInt(numberOfItems);

var nItemsRequired = prompt('How many items are required?')
nItemsRequired = parseInt(nItemsRequired);

var isOfferExpired = true;
var isCustomerPremium = false;

var isOfferValid = (isCustomerPremium && !isOfferExpired) || (numberOfItems >= nItemsRequired && isOfferExpired);

alert('Offer is valid ' + isOfferValid);