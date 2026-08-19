//set are used to store the unique values of any type, whether primitive values or object references.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5];
let set = new Set(arr);
console.log(set); // Set(10) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }
let myset = new Set();
myset.add(1);
myset.add("Pavi");
myset.add({ name: "Pavi" });
myset.add(1); // duplicate value will not be added
console.log(myset); // Set(3) { 1, "Pavi", { name: "Pavi" } }
let obj = { name: "Pavi" };
myset.add(obj);
console.log(myset); // Set(4) { 1, "Pavi", { name: "Pavi" }, { name: "Pavi" } }
console.log(myset.size); // 4
console.log(myset.has(1)); // true
console.log(myset.has("Pavi")); // true
console.log(myset.delete(1)); // true
console.log(myset); // Set(3) { "Pavi", { name: "Pavi" }, { name: "Pavi" } }
let arr1 = Array.from(myset);
console.log(arr1); // [ "Pavi", { name: "Pavi" }, { name: "Pavi" } ]