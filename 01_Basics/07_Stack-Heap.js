// Stack (primitive datatype).    Heap (reference - non primitive datatype).
// jab bhi stack memory use hoti hai matlab jab bhi variable declare kiya to uska ek copy milta hai.
//jab bhi ek memory heap ke ander define hoti hai object ya array to yaha se milta 
// hai refernce jo bhi change karenge wo original value mai change hoga.

let myName = "Maru";
let anotherName = myName
anotherName = "Deepak";
// jab bhi maine bola ki anothername ke ander jo value hai wo my name se jayegi 
// to actual me yaha pe value nahi uska ek copy diya jata hai matlab my name ka copy
//  ab copy m change kiya to original value thodi na change hogi.
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

