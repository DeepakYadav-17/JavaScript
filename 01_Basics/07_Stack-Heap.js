// Stack (primitive datatype).    Heap (reference - non primitive datatype).
// jab bhi stack memory use hoti hai matlab jab bhi variable declare kiya to uska ek copy milta hai.
//jab bhi ek memory heap ke ander define hoti hai object ya array to yaha se milta 
// hai refernce jo bhi change karenge original value mai change hoga.

let myName = "Maru";
let anotherName = myName
anotherName = "Deepak";

console.log(myName);
console.log(anotherName);


let userOne = {
    email : "Maru@gmail.com",
    upi : "user@bob"
}

let userTwo = userOne;

userTwo.email =  "Deepak@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);

