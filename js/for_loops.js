var i;
function showMultiplicationTable (num) {
    for(i = 1; i <= 10; i++){
        console.log( num + " X " + i + " = " + num*i);

    }
}
showMultiplicationTable(7);

var x;


function isOddOrEven() {
    for (i=1; i <= 10; i++){
        var random = Math.floor(Math.random() * 180) + 20;
        if(random % 2 === 0){
            console.log(random + " is an even number");
        }else{
            console.log(random + " is an odd number");
        }
    }
}
isOddOrEven();

for (var i = 1; i <= 9; i++) {
    console.log(toString(i).repeat(i));
}

for (var d= 100; d >= 5; d-=5) {
    console.log(d)
}
