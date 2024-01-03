const name = "Brijesh"

const age = 27

console.log(name + age + "Engineer"); // Brijesh27Engineer
console.log(name + " " +age + " " + "Engineer"); // Brijesh 27 Engineer

// But in morden coading we use string Interpolation for best Understanding

//stringInterpolation

console.log(`My name is ${name} Iam ${age} year old and iam an Engineer`);
console.log(`My name is ${name.toUpperCase()} Iam ${age} year old and iam an Engineer`);// we can add another method to manipulate the string

// we can also write another way to string

const newGame = new String('Brijesh Patel');

console.log(newGame); //[String: 'Brijesh Patel']
console.log(newGame[0]); //B
console.log(newGame.__proto__);//{}  // to see the object prototype

console.log(newGame.length); // 13
console.log(newGame.toUpperCase()); // BRIJESH PATEL
console.log(newGame.charAt(3)); // j  at place 2 j is available
console.log(newGame.indexOf("j")); // j is available at 3nd position 


const gamerName = new String("callONDutty");

const stringName = gamerName.substring(0, 4); // call the alphabet comes under 0 to 3 

console.log(stringName) // call it start from 0 to 3


const anotherString = gamerName.slice(-8, 4); // call the alphabet from -8 to 4 in slice method we call negative character

console.log(anotherString);


const nextString = "   Rohan  "  
console.log(nextString) //    Rohan   it give blank space from start and end
console.log(nextString.trim()) // it does not five any space it give only character 

const newName1 = "Munna_Chor_Hai"

console.log(newName1.replace("Chor", "Gandu")); // Munna_Gandu_Hai

console.log(newName1.includes("Chor")); // true
console.log(newName1.includes("MC")); // false

// convert string to array

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]); // Expected output: "fox"

const chars = str.split('');
console.log(chars[8]); // Expected output: "k"

const strCopy = str.split();
console.log(strCopy); // Array ["The quick brown fox jumps over the lazy dog."]

const strCopy2 = str.split('');
console.log(strCopy); // Array ["The quick brown fox jumps over the lazy dog."]