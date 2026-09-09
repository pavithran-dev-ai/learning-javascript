console.log("Asynchronous javascript");
function async(){
    console.log("one");
    console.log("Two");
    console.log("Three");
}
async();
let A = 24;
let B = 55;
let Z = A + B;
console.log(Z);
setTimeout(() => console.log("Step1"),4000);
setTimeout(() => console.log("Step2"),2000);
console.log("Okay Byeee!!");