const marvel_Heros = ["Thor", "IronMan", "AquaMan", "BlackPanther","SpiderMan"]
const dc_Heros = ["Batman","Flash","SuperMan","SuperWomen"]

// marvel_Heros.push(dc_Heros)

// console.log((marvel_Heros)); //["Thor", "IronMan", "AquaMan", "BlackPanther","SpiderMan" ["Batman","Flash","SuperMan","SuperWomen"]]
// dc_Heros comes under marvel_Heros here it take any array as element and put into array

// console.log(marvel_Heros[5]); // ["Batman","Flash","SuperMan","SuperWomen"] it consider this array as element
// console.log(marvel_Heros[5][1]); // ["Flash"]

// for not facing this prob we use concat

marvel_Heros.concat(dc_Heros)

console.log(marvel_Heros);