//defining the promise 
const TatkalBook = new Promise((resolve, reject) => {
    let isBooked = true;
    if(isBooked) {
        resolve();
    } else {
        reject();
    }
});
TatkalBook.then(Success)
.catch(failure)
function Success() {
    console.log("Booking confirmed!");
}
function failure() {
    console.log("Booking failed!");
}