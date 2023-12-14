let getValue = function (val = 10) {
  console.log(val);
};
getValue();
getValue(20);

// Output: 10 20

let getValuenew = function (val = 10, bonus = 5) {
  console.log(val + bonus);
};
getValuenew();
getValuenew(20);
getValuenew(20, 30);
getValuenew(undefined, 30);

// Output: 15 25 50 40

let getValuenewtwo = function (val = 10, bonus = val * 0.1) {
  console.log(val + bonus);
};

getValuenewtwo();
getValuenewtwo(20);
getValuenewtwo(20, 30);
getValuenewtwo(undefined, 30);

// Output: 11 22 50 40

let newVal = () => 100;
let getValuenewthree = function (val = 10, bonus = val * newVal()) {
  console.log(val + bonus);
};
getValuenewthree();
getValuenewthree(20);
getValuenewthree(20, 30);
getValuenewthree(undefined, 30);

// Output: 110 130 50 40

let getValuenewfour = function (val = 10, bonus = val * 0.1) {
  console.log(val + bonus);
  console.log(arguments.length);
};
getValuenewfour();
getValuenewfour(20);
getValuenewfour(20, 30);
getValuenewfour(undefined, 30);

// Output : 11
// 0
// 22
// 1
// 50
// 2
// 40
// 2

// let getValuenewfive = function (val = bonus, bonus = 0.1) {
//   console.log(val + bonus);
//   console.log(arguments.length);
// };

// getValuenewfive();

// Output: ReferenceError: Cannot access 'bonus' before initialization
