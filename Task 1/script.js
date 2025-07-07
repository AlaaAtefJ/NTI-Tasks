// NOTEs:
// console.log(isNaN(null)); // false
// console.log(isNaN("")); // false
// console.log(isNaN("5")); // false
// console.log(isNaN("23d")); // true
// console.log(typeof NaN); // number
// console.log(10 + NaN); // NaN

// >>>>>>>>>>>>> Question 1
// I add !isNaN because typeof NaN == number
function addNums(arr) {
  let sum = 0;
  arr.forEach((ele) => {
    if (typeof ele === "number" && !isNaN(ele)) sum += ele;
  });

  return sum;
}
// add only nums
let arrr = [1, 2, 3, 4, "6", NaN, true, 5.2, null, "", undefined]; // will add only number NOT any string
let result = addNums(arrr);
console.log(result);
//!=======================================================================
//************************************************************************
//!=======================================================================
// >>>>>>>>>>>>> Question 2

let text;

while (true) {
  text = prompt("Enter Text");
  let isValid = /^[A-Za-z]+$/.test(text);
  // if the use click cancel the text will be null
  if (isValid && text !== null) break;
  alert("Input must contains Characters Only");
}
console.log(text);

let caseSensetive = confirm("Consider Case Sensetive or NOT");
if (!caseSensetive) text = text.toLowerCase();

// Two Pointers
let left = 0;
let right = text.length - 1;
isPalindrom = true;

while (right >= left) {
  if (text[left] !== text[right]) {
    isPalindrom = false;
    break;
  }
  left++;
  right--;
}
console.log(isPalindrom);
//!=======================================================================
//************************************************************************
//!=======================================================================
// >>>>>>>>>>>>> Question 3
const input = prompt("Enter a String");
let count = 0;
input.split("").forEach((ele) => {
  if (ele == "e") count++;
});
console.log(`Num of 'e' : ${count}`);
//!=======================================================================
//************************************************************************
//!=======================================================================
// >>>>>>>>>>>>> Question 4

let name;
let email;
let phone;

let regExpName = /^[A-Za-z]+ [A-Za-z]+$/; // such as "nour khalil"
let regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let regExpPhone = /^01\d{9}$/;

while (true) {
  name = prompt("Enter a Name");
  if (regExpName.test(name)) break;
  alert("Invalid name!");
}

while (true) {
  email = prompt("Enter a Email");
  if (regExpEmail.test(email)) break;
  alert("Invalid email!");
}

while (true) {
  phone = prompt("Enter a Phone");
  if (regExpPhone.test(phone)) break;
  alert("Invalid Phone!");
}

document.getElementById("name").innerText = `Name: ${name}`;
document.getElementById("email").innerText = `Email: ${email}`;
document.getElementById("phone").innerText = `Phone: ${phone}`;

//!=======================================================================
//************************************************************************
//!=======================================================================
// >>>>>>>>>>>>> Question 5
let arr = [];

for (let i = 0; i < 3; i++) {
  let input;
  do {
    input = prompt(`Enter Num ${i + 1}`);
  } while (isNaN(input));

  arr.push(Number(input));
}
// console.log(arr);

// because the question saying there is only 3 number so you don't need to make loop
let add = (arr) => arr[0] + arr[1] + arr[2];
let mut = (arr) => arr[0] * arr[1] * arr[2];

let div = (arr) => {
  if (arr[1] === 0 || arr[2] === 0) return "NOT allowed division by 0";
  return arr[0] / arr[1] / arr[2];
};

function mathOperations(arr, callBack) {
  return callBack(arr);
}

let addition = mathOperations(arr, add);
let multiplication = mathOperations(arr, mut);
let division = mathOperations(arr, div);

document.getElementById("add").innerText = `Addition: ${addition}`;
document.getElementById("mul").innerText = `Multiplication: ${multiplication}`;
document.getElementById("div").innerText = `Division: ${division}`;
