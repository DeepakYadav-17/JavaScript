// what is callby value or callby reference 
// Based on how the data is stored in memory and how it is accessed, 
// datatypes are divided into two categories (primitive and primitive)

// javascript is a dynamically typed language.



// primitive datatype

// 7 types : string, number, boolean, null, undefined, symbol, BigInt.
const name ="Maru";
const score = 100;
const scoreValue = 100.1;

const isLoggedIn = false;
const outsideTemp = null;

let user = undefined;      // both are undefined
let userEmail;              // undefined

const id = Symbol('123');
const anotherId = Symbol('123')
console.log(id === anotherId);          //false

const bigNum = 765675665n;        // n will covert this small number in bigInt


// Reference type is know as NON primitive.

// array, objects, functions.

const heros = ["shaktiman", "krish", "kidkrish", "chotabheem"]

const person = { 
    naam : "Maru",
    age : 23,
}

const myFun = function(){
console.log(myFun);
}

console.log(typeof bigNum);              //bigint
console.log(typeof (outsideTemp));      //object
console.log(typeof myFun);             // FUNCTION OBJECT
console.log(typeof Symbol);            // function
console.log(typeof (heros));           //object
console.log(typeof person);            //object


// https://262.ecma-international.org/5.1/#sec-11.4.3