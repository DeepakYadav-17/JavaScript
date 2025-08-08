const accountId = 12345;
let accountEmail = "Maru@gmail.com";
var accountPassword = "Maru@1234";
accountCity = "Mumbai";
let accountState;
// code ko node.js analyzze karta hai.

// accountId = 170718; //const variable cannot be updeted or changed.

console.log(accountId);

accountEmail = "Deepak@gmail.com";
accountPassword = "Deepak170718";
accountCity = "Indonesia";

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);

/*
prefer not to use var.
because of issue in block scope functional scope.
*/