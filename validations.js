// name  validation 

/^[A-Za-z\s]+$/.test(x) //returns true if matched, vaidates for a-z and A-Z and white space

/^[A-Za-z0-9\s]+$/   // street 

/(^\d{5}$)|(^\d{5}-\d{4}$)/ // postal code s


// REGEX FOR FLOATS 
// [-+] ? [0 - 9] *\.?[0 - 9] *


// REGEX FOR INT


// REGEX FOR


const pattern1 = /\dman/g;
const pattern1test = /\dSalman/g;
let RE1 = `Salman 7Salman is good man 9man he is very good developer`
console.log(pattern1.test(RE1)) 
console.log(RE1) 
RE1=RE1.replace(pattern1test,'Akram')
console.log(RE1)

