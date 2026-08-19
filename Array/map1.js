//Map object are an collection of key-value Pairs where keys can be of any data type. 
let map1 = new Map();
map1.set("name", "Pavi");
map1.set("age", 25);
map1.set("city", "Chennai");
map1.set("age", 30)// duplicate key will not be added, it will update the value of the existing key
console.log(map1);
for (let [key, value] of map1) {
    console.log(key, value);
}
for (let key of map1.keys()) {
    console.log(key);
}map1.forEach((value, key) => {
    console.log("key",key,"value", value);
});