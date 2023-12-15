let colorsnew = function (message: string, ...colors: string[]) {
  console.log(message);
  for (let i in colors) {
    console.log(colors[i]);
  }
};
let messagenew = "List of colors";
let colorsarray = ["red", "blue", "green"];
colorsnew(messagenew, ...colorsarray);
