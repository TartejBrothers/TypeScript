let object = {
  newname: "sai",
  age: 21,
  place: "hyd",
};
let { newname, age, place } = object;

console.log(newname);
console.log(age);
console.log(place);

let objectnew = {
  objnewname: "sai",
  objage: 21,
  objplace: "hyd",
};
let { objnewname: nname, objage: nage, objplace: nplace } = objectnew;

console.log(nname);
console.log(nage);
console.log(nplace);
