const enum sizeconst {
  Small = 1,
  Medium,
  Large,
}

console.log(sizeconst.Small);
console.log(sizeconst.Medium);
console.log(sizeconst.Large);

// Output:
// 1
// 2
// 3

const enum sizeconstnew {
  Small,
  Medium = 4,
  Large,
}
console.log(sizeconstnew.Small);
console.log(sizeconstnew.Medium);
console.log(sizeconstnew.Large);

// Output:
// 0
// 4
// 5

const enum sizeconstnew1 {
  Small = 1,
  Medium = "small",
  Large = "l",
}

console.log(sizeconstnew1.Small);
console.log(sizeconstnew1.Medium);
console.log(sizeconstnew1.Large);
