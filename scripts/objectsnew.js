"use strict";
let ln = "last name";
let personnew = {
    "first name": "Taranjeet",
    [ln]: "Singh",
};
console.log(personnew["first name"] + " " + personnew[ln]);
// OR
console.log(personnew["first name"] + " " + personnew["last name"]);
