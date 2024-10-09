const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}
//need to change the code to a different kind of loop.
for (let i = 1; i < count; i++) {
  rows.push(padRow(i, count));
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

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
  }
*/
const numbers = [1, 2, 3];
const unshifted = numbers.unshift(5);
console.log(numbers);
console.log(unshifted);
