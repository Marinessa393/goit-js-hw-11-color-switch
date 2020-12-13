import css from "./css/styles.css";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

let intervalId = 0;

const body = document.body;
const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');

startBtnRef.addEventListener("click", startColorize);
stopBtnRef.addEventListener("click", stopColorize);

function startColorize() {
  startBtnRef.disabled = true;
  intervalId = setInterval(changer, 1000);
}

function stopColorize() {
  startBtnRef.disabled = false;
  clearInterval(intervalId);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changer() {
  body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
  console.log(body.style.backgroundColor);
}
