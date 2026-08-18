//Filter method is used to filter the elements of an array based on a condition
let cost = [100, 200, 300, 400, 500];
let filteredCost = cost.filter(x => x > 300);
console.log(cost);
console.log(filteredCost);
//Remove Duplicates From an Array
let numbers = [1, 2, 3, 4, 5, 1, 2, 3];
let uniqueNumbers = numbers.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniqueNumbers);