/*
let myDate = new Date()
console.log(myDate); // 2024-01-04T14:45:07.435Z

console.log(myDate.toString()); // Thu Jan 04 2024 14:47:22 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()); // Thu Jan 04 2024 
console.log(myDate.toISOString()); // 2024-01-04T14:50:21.973Z
console.log(myDate.toJSON()); // 2024-01-04T14:50:21.973Z
console.log(myDate.toLocaleDateString()); // 1/4/2024
console.log(myDate.toLocaleTimeString()); // 2:50:21 PM
console.log(myDate.toTimeString()); // Thu Jan 04 2024 
console.log(myDate.toUTCString()); // 14:50:21 GMT+0000 (Coordinated Universal Time)
console.log(myDate.getTimezoneOffset()); // Thu, 04 Jan 2024 14:50:21 GMT

console.log(typeof myDate); //Object

let myCreatedDate = new Date(2024, 0, 7); // 2024 0 => Jan date 7 

console.log(myCreatedDate); // 2024-01-07T00:00:00.000Z
console.log(myCreatedDate.toDateString()); // Sun Jan 07 2024

let myCreatedDate1 = new Date(2024, 0, 7, 5, 3); // 2024 0 => Jan date 7 at 5 30 am because time count 1 to 24
console.log(myCreatedDate1.toLocaleString()); // 1/7/2024, 5:03:00 AM


let myCreatedDate2 = new Date("2024-01-14"); 
console.log(myCreatedDate2.toLocaleString()); // 1/14/2024, 12:00:00 AM

let myCreatedDate3 = new Date("03-25-2024"); 
console.log(myCreatedDate3.toLocaleString()); // 3/25/2024, 12:00:00 AM


// when time is decided the result which one is give the quick answer
// timeStamp

let startingDate = new Date("01-14-2024")
let myTimeStamp = Date.now()

console.log(myTimeStamp); // 1704380782323 // result comes in milliSec
console.log(startingDate.getTime()); // 1705190400000 // result comes in milliSec

// if we subtract from starting to myTimeStamp we get the result which one is faster

console.log(Math.floor(Date.now()/1000)); // we get time in sec
*/


let newDate = new Date()
console.log(newDate); // 2024-01-04T15:15:28.932Z
console.log(newDate.getHours()); // 15
console.log(newDate.getDay()); // 4
console.log(newDate.getFullYear()); // 2024
console.log(newDate.getDate()); // 4

console.log(newDate.toLocaleString('default', {
    weekday: "long"
    
})) // to modiy the output in which type of output yo want every thing yo modify enter controlspace to get the which type of modification you want

