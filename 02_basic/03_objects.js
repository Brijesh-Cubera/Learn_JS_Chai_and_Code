// singleton:- when we create through constructor then its create a singleton object

// when we declair through literal then singleton not created

// object literals

const jsUser1 = {} // empty object

Object.create    // we also create object through and this type of object is called object constructor method and due to this singleton created

const jsUser2 = {
    name: "Brijesh"
}

myArray = ["h", "i"]
myArray[0] // we have only option to access the value of myArray 

// so we use object wher we have to declair key as well as value

const mysym = Symbol("key1") // for Symbol 

const jsUser = {
    name: "Brijesh",
    "full name": "Brijesh Patel",
    age: 27,
    mysym1: "mykey1", // it does not provide the symbol so we have to rite mySym inside []
    [mysym]: "mykey2",
    location: "Bangalore",
    email: "ibrijeshpatel@outlook.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]

}

console.log(jsUser.name); // Brijesh // every one chose this to access the value but is wan not a correct way to find the value
// console.log(jsUser.full name); // we never get through this so we use square bracket to get the result
console.log(jsUser["name"]); // Brijesh // correct way to find the value
console.log(jsUser["full name"]); // Brijesh Patel // correct way to find the value

console.log(typeof jsUser["mysym1"]); // string
console.log(jsUser[mysym]); // mykey2

jsUser.email = "brijeshnitap@gmail.com"
console.log(jsUser["email"]); // Brijesh Patel // correct way to find the value

Object.freeze(jsUser) // it freez the object after freeze nothing will be change also it does not give any error

jsUser.age = 32;
jsUser.email = "kuttahaitu@sahihai.com"

console.log(jsUser);
 