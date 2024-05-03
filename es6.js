const numbers = [21, 35, 75, 44];
const student = {
  name: "Sakib Khan",
  age: 32,
  movies: ["King khan", "Dhaka Mastan"],
};

//1.template string
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also like movie ${student.movies[0]}`;
console.log(about);

//2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = (num) => num + 32;
const isEven = (x) => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath=(num1,num2)=>{
    const sum=num1+num2;
    return sum;
}

//spread operator
const newNumbers=[...numbers];
numbers.push(99);
numbers.push(99);

console.log(newNumbers);
console.log(numbers);

//create a new array from an older array and add an element

const currentNumbers=[...numbers,65];
console.log(currentNumbers);
