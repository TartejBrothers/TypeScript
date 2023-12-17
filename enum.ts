enum size {
  Small = 1,
  Medium,
  Large,
}

console.log(size.Small);
console.log(size.Medium);
console.log(size.Large);

// Output:
// 1
// 2
// 3

enum sizenew {
  Small,
  Medium = 4,
  Large,
}
console.log(sizenew.Small);
console.log(sizenew.Medium);
console.log(sizenew.Large);

// Output:  
// 0
// 4
// 5
