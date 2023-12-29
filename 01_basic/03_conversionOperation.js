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




