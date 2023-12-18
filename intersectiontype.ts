// We can create our own types that are a combination of other types

type Weight = {
  weight: () => void;
};
type NewWeight = {
  newweight: () => void;
};
// We can use the & operator to combine types
type WeightAndNewWeight = Weight & NewWeight;
let oldweight: WeightAndNewWeight = {
  weight: () => console.log("weight"),
  newweight: () => console.log("newweight"),
};
