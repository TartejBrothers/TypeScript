for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// Output: 6 6 6 6 6

// Using Let will give the expected output

for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// Output: 1 2 3 4 5
