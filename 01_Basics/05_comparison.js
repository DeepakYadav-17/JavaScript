// console.log(2>1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
console.log("2" > 1);     // js automaically coverted this string too number.
console.log("02" > 1);

console.log(null > 0);    //false
console.log(null == 0);   //false
console.log(null >= 0);    //true
/* The reason is that an equality check  == and comparisos > < >= <= work differently.
comparisons convert null to a number, treating it as 0.
that's why (3) null >= 0 is true and null > 0 is false */

console.log(undefined == 0);         //false
console.log(undefined > 0);          //false
console.log(undefined < 0);          //false

// === strictly
console.log("2"=== 2);               //false
