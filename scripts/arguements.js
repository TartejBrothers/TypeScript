"use strict";
// let colors = function () {
//   console.log(message);
//   for (let i in arguments) {
//     console.log(arguments[i]);
//   }
// };
// let message = "List of colors";
// colors(message, "red");
// colors(message, "red", "blue");
// colors(message, "red", "blue", "green");
// Output:
// List of colors
// List of colors
// red
// List of colors
// List of colors
// red
// blue
// List of colors
// List of colors
// red
// blue
// green
// Using rest parameters
let colors = function (message, ...colors) {
    console.log(message);
    for (let i in colors) {
        console.log(colors[i]);
    }
};
let message = "List of colors";
colors(message, "red");
colors(message, "red", "blue");
colors(message, "red", "blue", "green");
