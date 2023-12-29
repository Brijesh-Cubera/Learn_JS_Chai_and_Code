console.log("2" > 1);  // true
console.log("02" > 1); // true

// Above code is not a good comparision always use same dataType to compare, 
// above code is also give output but its not the actual output

console.log(null > 0); // false
console.log(null < 0); // false
console.log(null == 0); // false
console.log(null <= 0); // true
console.log(null >= 0); // true it means null is not equal to zero but greaterThan/lessThen equal to zero


console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined <= 0); // false
console.log(undefined >= 0); // false

// Avoid all above code because its not good practice or its always push into problem 

console.log("2" == 2); // true because it not check dataType
console.log("2" === 2); // false because it check value as well as dataType.