let calculator = document.getElementById("cal");
let val1 = "";
let val2 = "";
let operator = "";
let hasil = "";
const operatorcalc = ["+", "-", "*", "/"];

function numbersValue(n) {
  if (calculator.value.indexOf("0") == 0) {
    calculator.value = n;
  } else {
    calculator.value += n;
  }
}

function operators(op) {
  if (!operatorcalc.includes(calculator.value.slice(-1))) {
    calculator.value += op;
  }
  console.log("Karakter terakhir adalah =", calculator.value.slice(-1));
}

function result() {
  val1 = calculator.value.slice(
    0,
    calculator.value.indexOf(includes(operatorcalc))
  );
  val2 = calculator.value.slice(
    calculator.value.indexOf(includes(operatorcalc)) + 1,
    calculator.value.length
  );
  hasil = Number(val1) + Number(val2);

  calculator.value = hasil;
}

function deleteVal() {
  val1 = "";
  val2 = "";
  operator = "";
  hasil = "";

  calculator.value = "0";
}
