const name = "Brijesh"

const age = 27

console.log(name + age + "Engineer"); // Brijesh27Engineer
console.log(name + " " +age + " " + "Engineer"); // Brijesh 27 Engineer

// But in morden coading we use string Interpolation for best Understanding

//stringInterpolation

console.log(`My name is ${name} Iam ${age} year old and iam an Engineer`);
console.log(`My name is ${name.toUpperCase()} Iam ${age} year old and iam an Engineer`);// we can add another method to manipulate the string

// we can also write another way to string

const newGame = new String("Brijesh Patel")

console.log(newGame);

