/*

let score = 33; 
console.log(typeof score);
console.log(typeof(score));  //both type give same result

let score2 = "33";
console.log(typeof score2);  // string


let score2InNumber = Number(score2);
console.log(typeof score2InNumber);  // number

let score3 = "23abc"
let score3InNumber = Number(score3);
console.log(score3InNumber);     // NaN :- Not a number because 23abc is not a number

let score4 = null
let score4InNumber = Number(score4);
console.log(score4InNumber);   // 0


let score5 = undefined
let score5InNumber = Number(score5);
console.log(score5InNumber);   // NaN 


// true = 1; false = 0

// convert number to boolean  (true = 1; false = 0)
// convert string to boolean  (true = "string"; false = "")

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

let isLoggedIn1 = ""

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1); // false

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

*/

// ********************* Operation ***********************

/*

let value = 3
let negValue = -value

console.table([value, negValue]);

let str1 = "Hello";
let str2 = "Brijesh";

console.log(str1,str2);
console.log(str1 +" "+ str2);

console.log("1" + 2); // value take as string 
console.log(1 + "2"); // value take as string
console.log("1" + "2"); // value take as string
console.log("1" + 2 + 2); // value take as string
console.log(1 + 2 + "2"); // first 2 value take as number then 3 value take as string
console.log("1" + (2 + 2)); // value take as string as well as number (inside breaket is number)

*/

console.log(true); // true
console.log(+true); // 1
console.log(+""); // 0


let gameCounter = 100;
gameCounter++;   // post fix   //value increase when tast is done // value of x is assigned to y, and then the value of x is incremented by 1. Therefore, after this operation, x becomes 4, and y becomes 3.
console.log(gameCounter); // 101

let gameCounter1 = 100;
++gameCounter1; // pre fix   // first value increase then task done // which means the value of a is incremented by 1, and then the result is assigned to b. Therefore, both a and b become 4.
console.log(gameCounter1); // 101
 




