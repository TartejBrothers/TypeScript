"use strict";
function checkType(weight) {
    if (typeof weight === "number") {
        return weight / 2;
    }
    else {
        weight.toLowerCase();
        return parseInt(weight) / 2;
    }
}
console.log(checkType(2));
console.log(checkType("2kg"));
// Output: 1
// 1
