//1.function.prototype.call()
//2.function.prototype.apply()
//3.function.prototype.bind()
function greetname(fname,lname){
    return `Hello ${fname} ${lname},${this.favcolor ? this.favcolor : ''}`
}
console.log(greetname('suriya','jyothika'));
const Result = greetname.call(null,'pavi','thran');
const Result2 = greetname.call({favcolor:'Red'},'pavi','thran');
console.log(Result);
console.log(Result2);
//apply()
const numbers = [5,7,2,9,1,4,8];
console.log(Math.min(5,7,2,9,1,4,8));
console.log(Math.max(5,7,2,9,1,4,8));
//using call()
const result3 = Math.min.call(null,5,7,2,9,1,4,8);
//using apply()
const result4 = Math.min.apply(null,numbers);
console.log("using call()",result3);
console.log("using apply()",result4);
//using bind()
const result5 = Math.max.bind(null,5,7,2,9,1,4,8);//use spread operator [...number]
console.log("using bind()",result5());