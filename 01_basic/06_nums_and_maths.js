/*
const score = 400 // simple way to define a number 
console.log(score);

// exclusive define a number means it should be only a no

const balance = new Number(100);
console.log(balance); //[Number: 100]

console.log(balance.toString()); // 100 //number to string and when we change into number to string then we also access all string data like length of balance

console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00 after decimal how many no you want

const otherNumber = 23.6789
console.log(otherNumber.toPrecision(3)); //23.7//it give precise value in 3 numbers counting start from start we have only 2 digit before decimal so it take 1 decimal value in doundoff form

const otherNumber1 = 123.6789
console.log(otherNumber1.toPrecision(3)); //124 // it give precise value in 3 numbers counting start from starting we have alreasdy 3 digit before decimal so its roundoff in 3 digit

const hundreds = 100000

console.log(hundreds.toLocaleString()); //100,000 //by US standard
console.log(hundreds.toLocaleString('en-IN')); // 1,00,000 //by Indian standard
*/

//++++++++++++++++++++ Math +++++++++++++++++++++++




// console.log(Math);
// console.log(Math.abs(-4)); // 4 // -ve number change to +ve number
// console.log(Math.round(4.6)); // 5 // rounded
// console.log(Math.ceil(4.6)); // 5 // top of round
// console.log(Math.floor(4.6)); // 4 //lowest value of round
// console.log(Math.min(4,3,8,9,6)); // 3 //lowest value
// console.log(Math.max(4,3,8,9,6)); // 9 //max value



// console.log(Math.random()); // 0.869577213942377 //value comes between 0 to 1

// console.log(Math.random()*10); // 7.033020219659216 //value comes between 0 to 1 but it shift one no above decimal
// console.log((Math.random()*10) + 1); // 7.033020219659216 //value comes after 1 because if number is 0 then 0+1 = 1 if 3 then 3+1 = 4 so due to this number not be a zero 
// console.log(Math.floor(Math.random()*10) + 1); // 7 // it give lowest of that no means floor of that no after decimal

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min); // we get value between min to max,
// we demand floor value of random generated value with multiply of (max-min+1) so we get rando value 
// but we need value greater than min so we add min to get no greater than min and less than max