"use strict"; //treat all JS code as newer version

// alert(3+3)   //this is working in brouser but her we use nodeJs

console.log(3+3); 

let name = "Brijesh";
let age = 27;
let isLoggedIn = true;

/* Type of Data Type:-

1) Number => any integer upto range 2^53.
2) bigint => when number is to big that time we use bigint normally it is not use
3) string => ""
4) boolean => true/false
5) null => standalone value
6) undefine => value not define
7) symbol => to find uniqueness
8) objects =>

*/

// when we find typeof undefined it give undefined
// But when we find typeof null it give object

console.log(typeof"brijesh"); // string
console.log(typeof age); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof undefined); // undefine
console.log(typeof null); // object