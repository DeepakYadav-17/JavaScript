//let score = 33;
let score = "33"
console.log(typeof score);           //string
console.log(typeof (score));        //string

let valueInNumber = Number(score);
console.log(valueInNumber);           //33
console.log(typeof (valueInNumber));  //number

//let result = 33abc;                 //error
let result = "33abc";
console.log(result);                 //33abc
console.log(typeof result);          //string

let checkResult = Number(result);
console.log(checkResult);            /*NaN  Expected output was "33abc"
 In JavaScript we cannot convert string to number else we will get NaN in the output. */
console.log(typeof(checkResult));    // number

let value = null;

console.log(value);                  //null  
console.log(typeof value);           //object

let valueCheck = Number(value);
console.log(valueCheck);             //0
console.log(typeof(valueCheck));     //number
   

let declare = undefined;

console.log(declare);                  //undefined
console.log(typeof declare);           //undefined

let checkDeclare  = Number(declare);
console.log(checkDeclare);             //NaN
console.log(typeof(checkDeclare));     //number


let boolean = true;
console.log(boolean);                  //true
console.log(typeof(boolean));          //boolean

let booleanCheck = Number(boolean);
console.log(booleanCheck);             //1
console.log(typeof(booleanCheck));     //number

/*
notes 

"33" => 33
"33abc" => NaN
true => 1, false => 0
1 => true, 0 => false
" " => false
"Maru" => true
*/

let isLoggedIn = 1;
console.log(isLoggedIn);                      //1
console.log(typeof(isLoggedIn));              //number

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);               //true
console.log(typeof(booleanIsLoggedIn));       //boolean

/*
let isLoggedIn = " ";
console.log(isLoggedIn);                      
console.log(typeof(isLoggedIn));              

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);               
console.log(typeof(booleanIsLoggedIn));    


let isLoggedIn = "Maru";
console.log(isLoggedIn);                      
console.log(typeof(isLoggedIn));              

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);               
console.log(typeof(booleanIsLoggedIn));       


*/

let number = 33;

let stringNumber = String(number);
console.log(stringNumber);             //33
console.log(typeof(stringNumber));     //string

