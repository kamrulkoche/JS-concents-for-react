// localStorage.setItem("userId", 8794554);

const addToLocalStorage = () => {
  const idInput = document.getElementById("storage-id");
  const id = idInput.value;
  const valueInput = document.getElementById("storage-value");
  const value = valueInput.value;

  //
  if (id && value) {
    localStorage.setItem(id, value);
    // localStorage.setItem("friend", JSON.stringify([45, 87, 55]));
  }

  idInput.value = "";
  valueInput.value = "";
};

const pen = { price: 10, color: "black" };
localStorage.setItem("pen", JSON.stringify(pen));


const storedPen=localStorage.getItem('pen');
console.log(storedPen);
console.log(JSON.parse(storedPen));

pen.price=54;
console.log(pen);
localStorage.setItem('pen',JSON.stringify(pen));