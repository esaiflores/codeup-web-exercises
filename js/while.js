"use strict";

var i = 2;
while (i <= 65536){
    console.log(i);
    i = (i *2);

}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;

console.log(allCones);
console.log(conesToPurchase);

do {
    var conesToPurchase = Math.floor(Math.random() * 5) + 1;

    if (conesToPurchase > allCones) {
        console.log("I cannot sell you " + conesToPurchase + " because I only have " + allCones);
    } else {
        console.log('I can sell you  ' + conesToPurchase + " because i have " + allCones);
        allCones -= conesToPurchase;
    }


} while (allCones >= 0);
console.log('Yay! I sold them all ! ');

