const READLINE = require('readline-sync');

let age = READLINE.question("how old am I: ");
console.log("I am " + age);


let userInput = READLINE.question("Type anything and I'll repeat it back!");
console.log(userInput);

declare and assign a variable for pennies using readlineSync
ask the user how many pennies he/she wants change for

let pennies = READLINE.quesion('please enter cents as a positive integer ');


// declare, assign, and print how many quarters you can make out of the pennies

let quarters =Math.floor(pennies/25);

let remainder = pennies %25;

let dimes = Math.floor(remainder/10);

console.log(quarters, 'QUARTERS');

console.log(dimes, 'DIMES');


// declare, assign, and print how many dimes you can make out of the pennies



// declare, assign, and print how many nickels you can make out of the pennies





// declare, assign, and print how many pennies are left over





// make a change drawer using an object to
// store all of your change
// each property on the object should represent the particular coin
// use the dot operator on the object to assign how many of each coin you have
// many coins are in the drawer
// print the drawer to see that the values are correct
