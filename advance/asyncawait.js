let reachA = new Promise((resolve,reject)=>{
   const reached = false;
   if(reached){
       setTimeout(resolve,3000,"Reached");
   } else {
       reject("Not reached!");
   }
})
async function asyncstatus(){
   console.log("Waiting for the promise to be resolved");
   await reachA.then((message)=>{
       console.log(message);
    }).catch((message)=>{
        console.error(message);
    });
    console.log("Promise is resolved");
}
asyncstatus();