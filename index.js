const randomColors = [
  "#FFB17A",
  "#0A1128",
  "#BEE7B8",
  "#713E5A",
  "#0B4F6C",
  "#20BF55",
];
//Varibles
const myInput = document.getElementById("myInput");
const apply = document.getElementById("apply");
const random = document.getElementById("random");
const display = document.getElementById("display");
const myInputColor = myInput.value;
//random color function
const myRandomColors = Math.floor(Math.random() * 5);

//Console log
console.log(randomColors[myRandomColors]);
console.log(myInputColor);


//Event Listeners
apply.addEventListener("click", () => {
  if (myInputColor === myInput.value) {
    myInput.textContent = myInputColor;
    display.style.backgroundColor = myInputColor;
  }
});

random.addEventListener("click", () => {
  display.style.backgroundColor = randomColors[myRandomColors];
});
