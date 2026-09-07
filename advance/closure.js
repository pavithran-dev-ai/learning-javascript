//lexical scoping - inner scope can access
function outer(name){
    let outervariable = "bread";
    function inner(){
        let innervariable = "butter"
        console.log('inner variable',innervariable)
        console.log('outer variable',outervariable)
        console.log('name variable',name)
    }
    return inner
}
let innerFunc = outer("Alice")
innerFunc()
function maths(x){
    return function(y){
        console.log('Sum of the value is',x+y)
    }
}
let adder = maths(5)
adder(200)