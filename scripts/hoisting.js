"use strict";
function hoist(name) {
    if (name === "taranjeet") {
        var greet = "hello taranjeet";
    }
    else if (name === "sachin") {
        var greet = "hello sachin";
    }
    else {
        var greet = "hello Guest";
    }
    console.log(greet);
}
hoist("sachin");
hoist("random");
