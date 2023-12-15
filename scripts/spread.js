"use strict";
let colorsnew = function (message, ...colors) {
    console.log(message);
    for (let i in colors) {
        console.log(colors[i]);
    }
};
let messagenew = "List of colors";
let colorsarray = ["red", "blue", "green"];
colorsnew(messagenew, ...colorsarray);
