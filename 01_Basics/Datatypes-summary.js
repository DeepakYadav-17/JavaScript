// what is callby value or callby reference 
// [kis tarah se data ko memory me rakha jata hai aur access kiya jata hai uss basis pe datatypes ko 2 category me devide kiya gya prmitive dnon primitive]

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
console.log(id === anotherId);

const bigInt = 765675665n;        // n will covert this small number in bigInt


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

console.log(typeof bigInt);
console.log(typeof (outsideTemp));
console.log(typeof myFun);             // FUNCTION OBJECT
console.log(typeof Symbol);


