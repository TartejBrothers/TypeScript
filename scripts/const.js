"use strict";
const namenew = "Hello";
// const namenew = "World"; This will lead to an Error as it is already declared
// const new; This will lead to an Error as no declaration
const obj = {
    num: 20,
    name: "Hello",
};
// obj={}; This will lead to an Error as it is already declared
obj.num = 30; // This is allowed as the value of the object can be changed
// It is used to create read only keywords and cannot be changed.
// They are not hoisted just like var.
// A value must be assigned to it while declaration and that value cannot be changed.
// Const can be used to create objects, but we cannot redeclare an object and change its properties then but we can change the value of the object.
