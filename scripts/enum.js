"use strict";
var size;
(function (size) {
    size[size["Small"] = 1] = "Small";
    size[size["Medium"] = 2] = "Medium";
    size[size["Large"] = 3] = "Large";
})(size || (size = {}));
console.log(size.Small);
console.log(size.Medium);
console.log(size.Large);
// Output:
// 1
// 2
// 3
var sizenew;
(function (sizenew) {
    sizenew[sizenew["Small"] = 0] = "Small";
    sizenew[sizenew["Medium"] = 4] = "Medium";
    sizenew[sizenew["Large"] = 5] = "Large";
})(sizenew || (sizenew = {}));
console.log(sizenew.Small);
console.log(sizenew.Medium);
console.log(sizenew.Large);
// Output:
// 0
// 4
// 5
var sizenew1;
(function (sizenew1) {
    sizenew1[sizenew1["Small"] = 1] = "Small";
    sizenew1["Medium"] = "small";
    sizenew1["Large"] = "l";
})(sizenew1 || (sizenew1 = {}));
console.log(sizenew1.Small);
console.log(sizenew1.Medium);
console.log(sizenew1.Large);
