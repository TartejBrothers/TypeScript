// Before we used to create objects like this :

let firstname = "Bill";
let lastname = "Gates";

let person = {
  firstname: firstname,
  lastname: lastname,
};

// OR like this

let newperson = {
  firstname,
  lastname,
};
console.log(person.firstname);
console.log(person.lastname);
console.log(newperson.firstname);
console.log(newperson.lastname);

// With ES6 we can create objects like this :

function newpersonname(firstname: string, lastname: string) {
  let fullname = firstname + " " + lastname;
  return { firstname, lastname, fullname };
}

let p = newpersonname("Bill", "Gates");
console.log(p.fullname);

function agecheck(age: number) {
  return {
    age: function () {
      if (age > 18) {
        return "Adult";
      }
    },
  };
}
console.log(agecheck(20).age());

// We can make it shorter like this :

function agechecknew(age: number) {
  return {
    age() {
      if (age > 18) {
        return "Adult";
      }
    },
  };
}
console.log(agechecknew(20).age());
