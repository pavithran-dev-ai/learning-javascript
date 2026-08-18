//Map method are used to replace the current array element then the replaced element are stored in the new array
let priceUSD = [20,30,40,60,80];
let priceINR = priceUSD.map(x => x*10);
console.log(priceUSD);
console.log(priceINR);
//using callback Function
function convertToINR(price) {
    return price * 10;
}
let priceINR1 = priceUSD.map(convertToINR);
console.log(priceINR1);
//Array of objects
const products = [
    {name: 'laptop', price: 20000},
    {name: 'mobile', price: 10000},
    {name: 'tablet', price: 15000},
];
console.log(products);
const productNames = products.map(product => product.name);
console.log(productNames);
const Name = "Atomatic Teller Machine";
const Abbrevation = Name.split(" ").map(word => word[0]).join("");
console.log(Abbrevation);