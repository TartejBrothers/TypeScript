type NewObj = {
  readonly id: number;
  name: string;
  randomfunc: (name: string) => string;
};
let obj1: NewObj = {
  id: 1,
  name: "John",
  randomfunc: (name: string) => {
    return name;
  },
};
console.log(obj1.randomfunc("John"));
