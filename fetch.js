//1. JSON=> stringify,parse

const student = {
  name: "Sakib Khan",
  age: 32,
  movies: ["King khan", "Dhaka Mastan"],
};

const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

//2. fetch
// fetch("url")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// keys,values
const keys = Object.keys(student);
// console.log(keys);

const values = Object.values(student);
// console.log(values);

//for
const numbers = [23, 54, 67, 87, 23, 78];
// numbers.forEach((num) => console.log(num));

const result = numbers.map((num) => num * 2);
// console.log(result);

//for of on array like object
//loop on an object using for in

const products = [
  { name: "laptop", price: 3200, brand: "lenovo", color: "silver" },
  { name: "phone", price: 7000, brand: "iphone", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "yellow" },
  { name: "sunglass", price: 300, brand: "ray", color: "black" },
  { name: "camera", price: 3200, brand: "canon", color: "gray" },
  { name: "phone", price: 7000, brand: "iphone", color: "golden" },

];

const newProduct = { name: "webcam", price: 700, brand: "Lal" };

//copy products array and then add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);

//create a new array without one specific item
//remove phone means create a new array without the phone
const remaining = products.filter((p) => p.name !== "phone");
console.log(remaining);
