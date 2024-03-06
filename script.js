let calculator = document.getElementById("cal");
let val1 = "0";
let val2 = "0";
let hasil = "0";
let operatorType = "";
let minValue = false;
let isOperatored = false;
let isDecimal = false;
let isDecimal2 = false;
const errorMessage = "Tidak bisa";

function numbersValue(n) {
  let num = n.toString();

  if (hasil != errorMessage) {
    // Value 1
    if (!isOperatored) {
      if (Number(val1) || isDecimal) {
        val1 += num;
        calculator.value = val1;
      } else if (!Number(val1)) {
        val1 = num;
        calculator.value = val1;
      }
    }

    // Value 2
    else if (isOperatored != "-") {
      if (val2.slice(0) != 0 || isDecimal2) {
        val2 += num;

        calculator.value = val1 + operatorType + val2;
      } else if (val2.slice(0) == 0 && !isDecimal2) {
        val2 = num;

        calculator.value = val1 + operatorType + val2;
      }
    }
  }

  console.log("Value 1 =", val1);
  console.log("Value 2 =", val2);
}

function decimalValue(dot) {
  if (!isOperatored && !isDecimal) {
    val1 += dot;
    calculator.value = val1 + operatorType;
    isDecimal = true;
  } else if (isOperatored && !isDecimal2) {
    val2 += dot;
    calculator.value = val1 + operatorType + val2;
    isDecimal2 = true;
  }
}

function operators(op) {
  if (Number(val1)) {
    if (!isOperatored) {
      calculator.value += op;
      operatorType = op;
    } else if (isOperatored && op == "-" && !minValue && !Number(val2)) {
      minValue = true;
      val2 = op;
      calculator.value = val1 + operatorType + val2;
    }
    isOperatored = true;
  }

  console.log("Value 2 =", val2);
  console.log("isOperatored =", isOperatored);
  console.log("operatorType =", operatorType);
}

function result() {
  if (hasil == errorMessage || !Number(val2)) {
    calculator.value = val1 || "0";
  } else if (Number(val2)) {
    if (operatorType == "+") {
      hasil = Number(val1) + Number(val2);
    } else if (operatorType == "-") {
      hasil = Number(val1) - Number(val2);
    } else if (operatorType == "*") {
      hasil = Number(val1) * Number(val2);
    } else if (operatorType == "/") {
      hasil = Number(val1) / Number(val2);
    }
    val1 = hasil.toString();
    calculator.value = val1;
  }

  if (hasil == Infinity) {
    hasil = errorMessage;
  }

  if (calculator.value.includes(".")) {
    isDecimal = true;
  } else if (!calculator.value.includes(".")) {
    isDecimal = false;
  }

  //Reset Variables
  val2 = "";
  operatorType = "";
  minValue = false;
  isOperatored = false;
  isDecimal2 = false;

  console.log("Hasil =", hasil);
  console.log("Value 1 =", val1);
  console.log("Value 2 =", val2);
}

function backSpace() {
  if (val2 || isDecimal2) {
    val2 = val2.slice(0, -1);
    calculator.value = val1 + operatorType + val2;
    // if (val2 === "0") {
    //   val2 = "";
    // }
    if (!val2.includes(".")) {
      isDecimal2 = false;
    }
    console.log("Value 2 =", val2);
  } else if (!val2 && isOperatored) {
    isOperatored = false;
    operatorType = "";
    calculator.value = val1 + operatorType + val2;
  } else if (!isOperatored) {
    val1 = val1.slice(0, -1);
    calculator.value = val1 + operatorType;
    console.log("Value 1 =", val1);
    if (!val1.includes(".")) {
      isDecimal = false;
    }
  }
  console.log(isDecimal);
}

function deleteVal() {
  val1 = "0";
  val2 = "0";
  operatorType = "";
  minValue = false;
  isOperatored = false;
  isDecimal = false;
  isDecimal2 = false;
  hasil = "0";

  calculator.value = "0";
}

function cek() {
  console.log("Nilai val1:", val1); // Output: Nilai val1: 0
  console.log("Nilai val2:", val2); // Output: Nilai val2: 0
  console.log("Nilai hasil:", hasil); // Output: Nilai hasil: 0
  console.log("Jenis Operator:", operatorType); // Output: Jenis Operator:
  console.log("Nilai Minimum:", minValue); // Output: Nilai Minimum: false
  console.log("Operasi Dilakukan:", isOperatored); // Output: Operasi Dilakukan: false
  console.log("Decimal Pada val1:", isDecimal); // Output: Decimal Pada val1: false
  console.log("Decimal Pada val2:", isDecimal2); // Output: Decimal Pada val2: false
}
