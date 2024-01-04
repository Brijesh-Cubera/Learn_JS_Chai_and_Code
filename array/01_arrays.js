
/*

// Array :- JavaScript arrays are resizable and can contain a mix of different data types.
// arrays are not associative arrays and so, array elements cannot be accessed using 
// arbitrary strings as indexes, but must be accessed using nonnegative integers as indexes.

const myArray = [0,1,2,3,4,5,6,]
const myHeros = ["Shaktiman", "Aryaman", "Doga", "Nagraj", "Bakelal", "Dhruv"]


console.log(myArray[3]); // 3
console.log(myHeros[4]); // Bakelal
const myArray2 = new Array(1,2,3,4,5) //its automatically transfer into array
console.log(myArray2); // [ 1, 2, 3, 4, 5 ] 

*/

// const numbers = [1,2,3,4,5] // when we inspect in web and write this and ifprint then below all things appear 
// console.log(numbers) // below all method perform in Array
// (5) [1, 2, 3, 4, 5]
//     0: 1
//     1: 2
//     2: 3
//     3: 4
//     4: 5
// length: 5
// [[Prototype]]: Array(0)
        // at: ƒ at()
        // concat: ƒ concat()
        // constructor: ƒ Array()
        // copyWithin: ƒ copyWithin()
        // entries: ƒ entries()
        // every: ƒ every()
        // fill: ƒ fill()
        // filter: ƒ filter()
        // find: ƒ find()findIndex: ƒ findIndex()
        // findLast: ƒ findLast()
        // findLastIndex: ƒ findLastIndex()
        // flat: ƒ flat()
        // flatMap: ƒ flatMap()
        // forEach: ƒ forEach()
        // includes: ƒ includes()
        // indexOf: ƒ indexOf()
        // join: ƒ join()
        // keys: ƒ keys()
        // lastIndexOf: ƒ lastIndexOf()
        // length: 0map: ƒ map()
        // pop: ƒ pop()
        // push: ƒ push()
        // reduce: ƒ reduce()
        // reduceRight: ƒ reduceRight()
        // reverse: ƒ reverse()
        // shift: ƒ shift()
        // slice: ƒ slice()
        // some: ƒ some()
        // sort: ƒ sort()
        // splice: ƒ splice()
        // toLocaleString: ƒ toLocaleString()
        // toReversed: ƒ toReversed()
        // toSorted: ƒ toSorted()
        // toSpliced: ƒ toSpliced()
        // toString: ƒ toString()
        // unshift: ƒ unshift()
        // values: ƒ values()
        // with: ƒ with()
        // Symbol(Symbol.iterator): ƒ values()
        // Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
            // [[Prototype]]:Object
                // constructor: ƒ Object()
                // hasOwnProperty: ƒ hasOwnProperty()
                // isPrototypeOf: ƒ isPrototypeOf()
                // propertyIsEnumerable: ƒ propertyIsEnumerable()
                // toLocaleString: ƒ toLocaleString()
                // toString: ƒ toString()
                // valueOf: ƒ valueOf()
                // __defineGetter__: ƒ __defineGetter__()
                // __defineSetter__: ƒ __defineSetter__()
                // __lookupGetter__: ƒ __lookupGetter__()
                // __lookupSetter__: ƒ __lookupSetter__()
                // __proto__: (...)
                // get __proto__: ƒ __proto__()
                // set __proto__: ƒ __proto__()
// Above all methode can be perform in Array


// +++++++++++ Array Method +++++++++++

const myArr = [0,1,2,3,4,5]

/*
myArr.push(6) // it at 6 at last
myArr.push(96) // it at 96 at last
console.log(myArr);

myArr.pop() // it remove last element from array
console.log(myArr);

myArr.unshift(99) // it add 99 to the first due to this all element shift their position so its take some time and also some lode occur in computer.
console.log(myArr);

myArr.shift() // it remove 1st element from array
console.log(myArr);

console.log(myArr.includes(99)); // false because 99 not available in array

console.log(myArr.indexOf(5)); // 4 5 available at 4th index
console.log(myArr.indexOf(26)); // -1 means not available or not exist

const newArr = myArr.join() // change Array into String

console.log(myArr); // [ 1, 2, 3, 4, 5 ]
console.log(newArr); // 1,2,3,4,5
console.log(typeof newArr); // string // Array change into string

*/

// slice, splice

console.log("A", myArr); // A [ 1, 2, 3, 4, 5 ]

const myArr1 = myArr.slice(1, 3); //array start from 1 to 3 in slice3 is not included
console.log(myArr1); // [2,3]
console.log("B", myArr); // B [ 1, 2, 3, 4, 5 ] // it doesnot effect in original Array

const myArr2 = myArr.splice(1, 3); //array start from 1 to 3 in splice 3 is included
console.log(myArr2); // [2,3]
console.log("c", myArr); // B [ 0, 4, 5 ] // it remove or manupulate the original Array
