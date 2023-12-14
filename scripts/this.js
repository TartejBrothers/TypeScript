"use strict";
let objnew = {
    num: 20,
    name: "Hello",
    greet: function () {
        console.log(this.name + " " + "World"); // This will print Hello World
        setTimeout(function () {
            // console.log(this.name + " " + "World"); // This will Print undefined World
        }, 1000);
    },
};
objnew.greet(); // This will print undefined as the this keyword is not pointing to the object
// To fix this, we use a new variable
let objtwo = {
    num: 20,
    name: "Hello",
    greet: function () {
        console.log(this.name + " " + "World"); // This will print Hello World
        var self = this;
        setTimeout(function () {
            console.log(self.name + " " + "World"); // This will Print Hello World
        }, 1000);
    },
};
objtwo.greet(); // This will print undefined as the this keyword is not pointing to the object
let objthree = {
    num: 20,
    name: "Hello",
    greet: function () {
        console.log(this.name + " " + "World"); // This will print Hello World
        setTimeout(() => {
            console.log(this.name + " " + "World"); // This will Print Hello World
        }, 1000);
    },
};
objthree.greet(); // This will print undefined as the this keyword is not pointing to the object
