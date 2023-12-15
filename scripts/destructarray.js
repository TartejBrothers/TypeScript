"use strict";
let employees = ["taranjeet", "singh", "bedi"];
let [fname, mname, lname] = employees;
console.log(fname);
console.log(mname);
console.log(lname);
//output :
// taranjeet
// singh
// bedie
// Other Ways to Destructure
let [, , lnamenew] = employees;
console.log(lnamenew);
let [fname1, ...elements] = employees; // Use of rest operator
console.log(fname1);
console.log(elements);
