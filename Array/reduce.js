//Reduce method is used to reduce the elements of an array to a single value
//reduce((accumulator, currentValue) => { ... }, initialValue)
let cost = [100, 200, 300, 400, 500];
let carttotal = cost.reduce((total, currentValue) => total + currentValue, 0);
console.log(carttotal);
//count the 2D array Elements
let arr = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"]];
console.log(arr.flat());
let count = arr.flat().reduce((acc, curr) => {
    if (acc[curr]) {
        acc[curr]++;
    } else {
        acc[curr] = 1;
    }
    return acc;
}, {});
console.log(count);