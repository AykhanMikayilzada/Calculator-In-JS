//Operations
const allClearBtn = document.querySelector("#allClearBtn"); // AC
const module = document.querySelector("#module"); // %
const plus = document.querySelector("#plus"); // +
const minus = document.querySelector("#minus"); // -
const division = document.querySelector("#division"); // /
const multiplication = document.querySelector("#multiplication"); // *
const comma = document.querySelector("#comma"); // ,
const draw = document.querySelector("#draw"); // =
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//Numbers
const zero = document.querySelector("#zero"); // 0
const one = document.querySelector("#one"); // 1
const two = document.querySelector("#two"); // 2
const three = document.querySelector("#three"); // 3
const four = document.querySelector("#four"); // 4
const five = document.querySelector("#five"); // 5
const six = document.querySelector("#six"); // 6
const seven = document.querySelector("#seven"); // 7
const eight = document.querySelector("#eight"); // 8
const nine = document.querySelector("#nine"); // 9
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
let result;
let show = [];
let expression = [];
let zeroCount = 0;
let sum = document.querySelector("#sum");

comma.addEventListener("click", function () {
  if (sum.innerText == "") {
    show.push("0,");
    expression.push("0,");
    sum.innerText = show.join("");
    return 0;
  } else if (show.includes(",") || show.includes("0,")) {
    return 0;
  } else {
    show.push(",");
    expression.push(",");
    sum.innerText = show.join("");
  }
});
zero.addEventListener("click", function () {
  show.push("0");
  expression.push("0");
  sum.innerText = show.join("");
});
one.addEventListener("click", function () {
  show.push("1");
  expression.push("1");
  sum.innerText = show.join("");
});
two.addEventListener("click", function () {
  show.push("2");
  expression.push("2");
  sum.innerText = show.join("");
});
three.addEventListener("click", function () {
  show.push("3");
  expression.push("3");
  sum.innerText = show.join("");
});
four.addEventListener("click", function () {
  show.push("4");
  expression.push("4");
  sum.innerText = show.join("");
});
five.addEventListener("click", function () {
  show.push("5");
  expression.push("5");
  sum.innerText = show.join("");
});
six.addEventListener("click", function () {
  show.push("6");
  expression.push("6");
  sum.innerText = show.join("");
});
seven.addEventListener("click", function () {
  show.push("7");
  expression.push("7");
  sum.innerText = show.join("");
});
eight.addEventListener("click", function () {
  show.push("8");
  expression.push("8");
  sum.innerText = show.join("");
});
nine.addEventListener("click", function () {
  show.push("9");
  expression.push("9");
  sum.innerText = show.join("");
});
allClearBtn.addEventListener("click", function () {
  sum.innerText = "";
  show = [];
  expression = [];
  result = "";
});
module.addEventListener("click", function () {
  if (expression == [] || expression == "") {
    return 0;
  } else {
    show.push("%");
    expression.push("%");
    sum.innerText = show.join("");
  }
});
plus.addEventListener("click", function () {
  if (expression == [] || expression == "") {
    return 0;
  } else {
    show.push("+");
    expression.push("+");
    sum.innerText = show.join("");
  }
});
minus.addEventListener("click", function () {
  if (expression == [] || expression == "") {
    return 0;
  } else {
    show.push("-");
    expression.push("-");
    sum.innerText = show.join("");
  }
});
multiplication.addEventListener("click", function () {
  if (expression == [] || expression == "") {
    return 0;
  } else {
    show.push("*");
    expression.push("*");
    sum.innerText = show.join("");
    console.log(expression);
  }
});
division.addEventListener("click", function () {
  if (expression == [] || expression == "") {
    return 0;
  } else {
    show.push("/");
    expression.push("/");
    sum.innerText = show.join("");
  }
});
draw.addEventListener("click", function () {
  if (expression == [] || expression == "") {
    return 0;
  }
  result = eval(expression.join(""));
  sum.innerText = result;
  expression = [];
  expression.push(result);
});
window.addEventListener("keypress", function (e) {
  if ((e.key == "Enter" && expression == []) || expression == "") {
    return 0;
  }
  if ((e.key = "Enter")) {
    result = eval(expression.join(""));
    sum.innerText = result;
    expression = [];
    expression.push(result);
  }
});
