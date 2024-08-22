//question1
let a=50
let b=30
let sum=120
console.log(sum-(a+b))
/*Now calculate percentage by taking all the 5 subjects number */

const readlineSync = require('readline-sync');
let hindi = Number(readlineSync.question("What is your Hindi marks? "));
let english = Number(readlineSync.question("What is your English marks? "));
let math = Number(readlineSync.question("What is your Math marks? "));
let science = Number(readlineSync.question("What is your Science marks? "));
let sst = Number(readlineSync.question("What is your SST marks? "));

let total = hindi + english + math + science + sst;
let percentage = (total / 500) * 100;

console.log("Your percentage is: " + percentage + "%");

