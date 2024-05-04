//1. array destructuring
const numbers = [42, 65];
const [x, y] = numbers;

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

// console.log(x, y);

console.log(boxify(80, 45));

const student = {
  name: "Sakib Khan",
  age: 32,
  movies: ["King khan", "Dhaka Mastan"],
};

const [firstMovie, secondMovie] = student.movies;
// console.log(firstMovie);

//object destructuring
const { name, age } = { name: "alu", age: 14 };
const { id, A } = { id: 12, name: "alu", A: 14 };
console.log(id);

const employee = {
  ide: "VS Code",
  designation: "developer",
  machine: "mac",
  languages: ["html", "css", "js"],
  specification: {
    height: 66,
    weight: 67,
    address: "kumarkhali",
    drink: "water",
    watch: {
      color: "black",
      price: 500,
      brand: "garmin",
    },
  },
};

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch;
