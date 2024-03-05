let calculator = document.getElementById("cal");
let val1 = "";
let val2 = "";
let hasil = "";
let minValue = false;
let isOperatored = false;
let operator = "";
let operatorType = "";
const errorMessage = "Tidak bisa";

function numbersValue(n) {
  let num = n.toString();

  if (hasil != errorMessage) {
    if (!isOperatored) {
      if (val1.slice(0) != 0) {
        val1 += num;
        calculator.value = val1;
      } else if (val1.slice(0) == 0) {
        val1 = num;
        calculator.value = val1;
      }
    } else if (isOperatored != "-") {
      if (val2.slice(0) != 0) {
        val2 += num;

        calculator.value = val1 + operatorType + val2;
      } else if (val2.slice(0) == 0) {
        val2 = num;

        calculator.value = val1 + operatorType + val2;
      }
    }
  }
  console.log("Value 1 =", val1);
  console.log("Value 2 =", val2);
}

function operators(op) {
  if (!isOperatored) {
    calculator.value += op;
    operatorType = op;
  } else if (isOperatored && op == "-" && !minValue) {
    minValue = true;
    val2 = op;
    calculator.value = val1 + operatorType + val2;
  }

  isOperatored = true;
  console.log("Value 2 =", val2);
  console.log("isOperatored =", isOperatored);
  console.log("operatorType =", operatorType);
}

function result() {
  if (hasil == errorMessage) {
    hasil = hasil;
  } else {
    if (operatorType == "+") {
      hasil = Number(val1) + Number(val2);
    } else if (operatorType == "-") {
      hasil = Number(val1) - Number(val2);
    } else if (operatorType == "*") {
      hasil = Number(val1) * Number(val2);
    } else if (operatorType == "/") {
      hasil = Number(val1) / Number(val2);
    }
  }

  if (hasil == Infinity) {
    hasil = errorMessage;
  }

  // console.log("val1 =", val1, "val2 =", val2, "Operator =", operatorType);
  val1 = hasil;
  val2 = "0";
  minValue = false;
  calculator.value = val1;
  isOperatored = false;
  console.log("Hasil =", hasil);
  console.log("Value 1 =", val1);
  console.log("Value 2 =", val2);
}

function deleteVal() {
  val1 = "0";
  val2 = "0";
  isOperatored = false;
  minValue = false;
  hasil = "0";

  calculator.value = hasil;
}
