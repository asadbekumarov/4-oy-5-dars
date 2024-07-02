const elInput = document.querySelector("#input");
const elBtn0 = document.querySelector("#btn0");
const elBtn1 = document.querySelector("#btn1");
const elBtn2 = document.querySelector("#btn2");
const elBtn3 = document.querySelector("#btn3");
const elBtn4 = document.querySelector("#btn4");
const elBtn5 = document.querySelector("#btn5");
const elBtn6 = document.querySelector("#btn6");
const elBtn7 = document.querySelector("#btn7");
const elBtn8 = document.querySelector("#btn8");
const elBtn9 = document.querySelector("#btn9");
const elP = document.querySelector("#left__circle");
const elA = document.querySelector("#right__circle");

elBtn0.addEventListener("click", function () {
  const value = 0;
  if (Number(elInput.value) < 10) {
    elInput.value = elInput.value + value;
    elInput.className = "border__input";
  }
});
elBtn1.addEventListener("click", function () {
  const value = 1;
  if (Number(elInput.value) < 10) {
    elInput.value = elInput.value + value;
    elP.className = "border";
    elInput.className = "border__input";
  }
  if (Number(elInput.value) >= 10) {
    elA.className = "border2";
    elP.className = "border0";
  }
});
elBtn2.addEventListener("click", function () {
  const value = 2;
  if (Number(elInput.value) < 10) {
    elInput.value = elInput.value + value;

    elP.className = "border";
    elInput.className = "border__input";
  }
  if (Number(elInput.value) >= 10) {
    elA.className = "border2";
    elP.className = "border0";
  }
});
elBtn3.addEventListener("click", function () {
  const value = 3;
  if (Number(elInput.value) < 10) {
    elInput.value = elInput.value + value;

    elP.className = "border";
    elInput.className = "border__input";
  }
  if (Number(elInput.value) >= 10) {
    elA.className = "border2";
    elP.className = "border0";
  }
});
elBtn4.addEventListener("click", function () {
  const value = 4;
  if (Number(elInput.value) < 10) {
    elInput.value = elInput.value + value;
    console.log("clicked");
    elP.className = "border";
    elInput.className = "border__input";
  }
});
elBtn5.addEventListener("click", function () {
  const value = 5;
  if (Number(elInput.value) < 10) {
    elInput.value = elInput.value + value;

    elP.className = "border";
    elInput.className = "border__input";
  }
});
elBtn6.addEventListener("click", function () {
  const value = 6;
  if (Number(elInput.value) < 10) {
    elInput.value = elInput.value + value;
    console.log("clicked");
    elP.className = "border";
    elInput.className = "border__input";
  }
  if (Number(elInput.value) >= 10) {
    elA.className = "border2";
    elP.className = "border0";
  }
});
elBtn7.addEventListener("click", function () {
  const value = 7;
  if (Number(elInput.value) < 10) {
    elInput.value = elInput.value + value;

    elP.className = "border";
    elInput.className = "border__input";
  }
});
elBtn8.addEventListener("click", function () {
  const value = 8;
  if (Number(elInput.value) < 10) {
    elInput.value = elInput.value + value;
    console.log("clicked");
    elP.className = "border";
    elInput.className = "border__input";
  }
});
elBtn9.addEventListener("click", function () {
  const value = 9;
  if (Number(elInput.value) < 10) {
    elInput.value = elInput.value + value;

    elP.className = "border";
    elInput.className = "border__input";
  }
  if (Number(elInput.value) >= 10) {
    elA.className = "border2";
    elP.className = "border0";
  }
});

let modeBtn = document.getElementById("light-dark");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});