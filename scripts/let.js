"use strict";
function letblock(name) {
    let greet;
    if (name === "taranjeet") {
        greet = "hello taranjeet";
    }
    else if (name === "sachin") {
        greet = "hello sachin";
    }
    else {
        greet = "hello Guest";
    }
    console.log(greet);
}
letblock("taranjeet");
letblock("random");
// One More Example For Block Statement
var a = 10;
var b = 20;
if (a == 10) {
    let a = 30;
    var b = 40;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);
// Output : 30 40 10 40
