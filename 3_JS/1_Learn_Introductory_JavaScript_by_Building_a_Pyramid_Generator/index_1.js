let character = "Hello";
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
let pushed = rows.push();
console.log(pushed);//4
let popped = rows.pop();
console.log(popped);//freeCodeCamp
console.log(rows);//[Naomi, Quincy, CamperChan]

let cities = ["London", "New York", "Mumbai"];
console.log(cities);
cities[cities.length-1] = "Mexico City";
console.log(cities);