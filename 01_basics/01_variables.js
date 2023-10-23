const accountID = 1234 // const means we cant change it's value
let accountEmail = "jat@google.com"
var accountPassword = "123456"
accountCity = "Bangalore"
let accountState  // it will give undefined as we have not assigned any value to it 

// accountID = 2  // here it will give error because we declared accountId as const so we cant change its value

accountEmail = "abc@d.com"
accountPassword = "121211222"
accountCity = "Delhi"

console.log(accountState) // undefined
console.log(accountID);

/*
use let.
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountID,accountEmail,accountPassword,accountCity]) // use to print values in tablular format
