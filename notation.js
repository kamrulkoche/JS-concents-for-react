const person = {
  name: "Lal Nil Holud mia",
  profession: "Traffic Surgeon",
  age: 41,
  25: "summer",
  "son-name": "sunny",
  address: "Shahabag",
};

//dot notation
const prof1 = person.profession;
console.log(prof1);

//bracket notation
const prof2 = person["profession"];
console.log(prof2);
const pName = "profession";
const prof3 = person[pName];
console.log(prof3);

const season = person[25];
console.log(season);
const son = person["son-name"];
console.log(son);
