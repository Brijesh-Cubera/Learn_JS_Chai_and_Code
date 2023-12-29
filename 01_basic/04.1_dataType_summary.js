// DataType is divided into two typeof
// 1)Primitive  
// 2)NonPrimitive

// 1) Primitive :- 7 type 
    // i)String
    // ii) Number
    // iii) Boolean
    // iv) null
    // v) undefined
    // vi) Symbol
    // vii) BigInt

const name = "Brijesh";   // string
const age = 32   // number
const ageAndMonths = 32.7  // float
const isLoggedIn = false // Boolean
const outSideTemp = null // null
let userEmail; // undefined

const id = Symbol("123")
const anotherId = Symbol("123")

// Both Id has same value but it give different value 
// because under symbol it should be anything according to their rules.

console.log(id === anotherId); // false

const bigNumber = 3456778996443990n   // when we write n after number its terns into bigInt


// 2) Reference (Non Primitive) :- 3 type
//     i) Array
//     ii) Object
//     iii) Function


const heros = ["Shaktiman", "Doga", "Nagraj", "Dhruv","Bakelal"]; // Array

let myObj = {
    name: "Brijesh",
    age: 27,
    sex:"Male"
} // Object 

const myFunction = function() {
    console.log("Hello World!");
}

console.log(typeof bigNumber)  // bigInt
console.log(typeof outSideTemp) // object
console.log(typeof myFunction) // function but it is Object function
console.log(typeof userEmail)  // undefined


// JS is not define language 
// JS is Dynamic language


