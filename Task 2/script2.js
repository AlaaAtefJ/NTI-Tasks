//! =========================== Task 3 ===========================
function append(value) {
  document.getElementById("display").value += value;
}

function calculate() {
  try {
    // eval function evaluate a string as a JavaScript Code
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
  } catch {
    alert("Invalid Expression");
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
}
