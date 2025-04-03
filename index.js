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

//Event Listeners
apply.addEventListener("click", () => {
  const myInputColor = myInput.value;
  display.style.backgroundColor = myInputColor;
});

random.addEventListener("click", () => {
  const myRandomColors = Math.floor(Math.random() * randomColors.length);
  console.log(randomColors[myRandomColors]);
  display.style.backgroundColor = randomColors[myRandomColors];
});
