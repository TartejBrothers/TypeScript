let colorsar = ["Red", "Green", "Blue"];

for (let index in colorsar) {
  console.log(index);
}

// Output:
// 0
// 1
// 2

// Old Way

for (let indexnew in colorsar) {
  console.log(colorsar[indexnew]);
}

// Output:
// Red
// Green
// Blue

// New Way

for (let color of colorsar) {
  console.log(color);
}

// Output:
// Red
// Green
// Blue

// Iteraing over a string

let strnew5 = "Hello";

for (let char of strnew5) {
  console.log(char);
}

// Output:
// H
// e
// l
// l
// o
