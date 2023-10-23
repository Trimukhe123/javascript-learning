// primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.4

const isLoggedIn = true
const outsideTemp = null
let Email;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

console.log(typeof id);
console.log(typeof outsideTemp);

// Reference (Non Primitive)

// Array, Objects, Functions

// javascript is dynamically type language

// typeof null is object


// ********************************************

// Stack (Primitive), Heap(Non-Primitive)

let myName = "JT"

let anotherName = myName

anotherName = "Trimukhe"

console.log(myName)
console.log(anotherName)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "abc@google.com"

console.log(userOne.email);
console.log(userTwo.email);
