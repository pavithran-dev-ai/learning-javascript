const cars = ["BMW","vogan","jaguar"];
console.log(cars);
const cars1 = [];
cars1[0] = "ferari";
cars1[1] = "Audi";
cars1[2] = "Toyato";
console.log(cars1);
const cars2 = new Array("bolero","Thar","bugati");
console.log(cars2);
let access = cars [0];
console.log(access);
cars1[0] = "vishal saran";
console.log(cars1);
let str = cars2.toString();
console.log(str);
//display an array using the JSON.stringfy()
const fruits = ["orange","apple","guava","cherry"];
let display = JSON.stringify(fruits);
console.log(display);