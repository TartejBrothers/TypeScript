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

let [fname2, mname2, lname2 = "New"] = employees; // Use of default values

console.log(lname2); // This will print bedi only
// This is so because we have already assigned a value to lname2, if bedi would not been there then it would have printed New
