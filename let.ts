function letblock(name: string) {
  let greet;
  if (name === "taranjeet") {
    greet = "hello taranjeet";
  } else if (name === "sachin") {
    greet = "hello sachin";
  } else {
    greet = "hello Guest";
  }
  console.log(greet);
}
letblock("taranjeet");
letblock("random");
