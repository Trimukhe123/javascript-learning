const name = "Trimukhe "
const age = 21

// console.log(name + count + " value")

// console.log(`Hello my name is ${name} and my age is ${age}`)

const game = new String('abc-def-ghi')

console.log(game.__proto__)
console.log(game.length)
console.log(game.toUpperCase());
console.log(game.charAt(2));
console.log(game.indexOf('c'));

const newString = game.substring(0,4)
console.log(newString);

const anotherString = game.slice(-3,4)
console.log((anotherString));

const newStringOne = "     abcde     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/google%20abc"

console.log(url.replace('%20', '-'))

console.log(url.includes('abcd'))

console.log(game.split('-'));