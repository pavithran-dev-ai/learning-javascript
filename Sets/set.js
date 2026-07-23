let letters =new Set(["a","b","c","d"]);
console.log(letters);
let c = letters.size;
console.log(c);
let words = new Set();
words.add("car");
words.add("ball");
words.add("pen");
words.add("pencil");
console.log(words);
//listing the set element using the for...of loop
let bike = new Set(["yamaha","GT","honda"])
let loop = "";
for(let x of bike){
    loop += x;
}
console.log(loop);
let type = typeof words;
console.log(type);