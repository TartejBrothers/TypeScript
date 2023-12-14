"use strict";
// Old Way
var getVal = function () {
    return 10;
};
// Arrow Function using Return
var getValArrow = () => {
    return 10;
};
// Arrow Function without Return
var getValArrowReturn = () => 10;
// Arrow Function with Parameters
var getValArrowPara = (m, n) => m + n;
console.log(getVal());
console.log(getValArrow());
console.log(getValArrowReturn());
console.log(getValArrowPara(10, 20));
console.log(getValArrowPara("10", "20"));
console.log(typeof getValArrowPara);
console.log(typeof getValArrowPara(10, 20));
