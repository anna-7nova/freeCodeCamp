const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2*rowNumber-1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow(i+1, count));
}

let result = "";
console.log(result);

for (const row of rows) {
  result = result + "\n" + row;
}



function addTwoNumbers(firstNum, secondNum) {
  return firstNum + secondNum;
}
const sum = addTwoNumbers(5, 10);
console.log(sum);


