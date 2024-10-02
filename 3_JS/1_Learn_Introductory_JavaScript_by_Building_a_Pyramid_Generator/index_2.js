const character = "#";
const count = 8;
const rows = [];
for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1));
}

let result = "";
console.log(result);

for (const row of rows) {
  result = result + "\n" + row;
}

function padRow(name) {
  const test = "Testing";
  console.log("This works!");
  return test;
  console.log("This works!");
}

padRow("Anna");
const call = padRow("CamperChan");
console.log(call);

function addTwoNumbers(firstNum, secondNum) {
  return firstNum + secondNum;
}
const sum = addTwoNumbers(5, 10);
console.log(sum);


