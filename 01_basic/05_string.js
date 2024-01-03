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