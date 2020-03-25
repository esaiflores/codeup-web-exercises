var pickNumber = 0;

while (pickNumber % 2 === 0) {
    pickNumber = +prompt('Choose and put an odd number between 1 and 50');

}

for(var i =1; i < 50; i+=2){
    if(i === pickNumber){
        console.log('Yikes! skipping number ' + pickNumber);
        continue;
    }
    console.log('here is an odd number ' + i);
}