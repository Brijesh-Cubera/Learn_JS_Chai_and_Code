const marvel_Heros = ["Thor", "IronMan", "AquaMan", "BlackPanther","SpiderMan"]
const dc_Heros = ["Batman","Flash","SuperMan","SuperWomen"]

// marvel_Heros.push(dc_Heros)

// console.log((marvel_Heros)); //["Thor", "IronMan", "AquaMan", "BlackPanther","SpiderMan" ["Batman","Flash","SuperMan","SuperWomen"]]
// dc_Heros comes under marvel_Heros here it take any array as element and put into array

// console.log(marvel_Heros[5]); // ["Batman","Flash","SuperMan","SuperWomen"] it consider this array as element
// console.log(marvel_Heros[5][1]); // ["Flash"]

// for not facing this prob we use concat

// const allHeros = marvel_Heros.concat(dc_Heros) // it take element as element not array as element
// console.log(allHeros); // ["Thor", "IronMan", "AquaMan", "BlackPanther","SpiderMan", "Batman","Flash","SuperMan","SuperWomen"]

// const allNewHeros = [...marvel_Heros,...dc_Heros] // spread operator is widely used
// console.log(allNewHeros); //["Thor", "IronMan", "AquaMan", "BlackPanther","SpiderMan", "Batman","Flash","SuperMan","SuperWomen"]


// const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_array = another_arr.flat(Infinity) // but always use how many array in q in above 32 extra array comes inside parent array
// console.log(real_another_array); // [1,2,3,4,5,6,7,6,7,4,5]


// console.log(Array.isArray("Brijesh")); // false
// console.log(Array.from("Brijesh")); // ['B', 'r', 'i','j', 'e', 's','h'] // it convert object into array
// console.log(Array.from({name: "Brijesh"})); // [] // it does not converted into array because it doesnot know which part change into array key or values so it gives empty array

let score1 = 100;
let score2 = 300;
let score3 = 500;

console.log(Array.of(score1,score2,score3));// [100,300,500] // we can use of instead_of from which is used above it convert and collebrate into many object to one array