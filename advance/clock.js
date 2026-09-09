let ampm = document.getElementById("ampm");
function displaytime(){
    let datetime = new Date();
    let hour = datetime.getHours();
    let minute =datetime.getMinutes();
    let second =datetime.getSeconds();
    if(hour>12){
        hour = hour - 12;
        
        ampm.innerHTML = "PM";
    }
    document.getElementById("hour").innerHTML =padZero(hour);
    document.getElementById("minute").innerHTML = padZero(minute);
    document.getElementById("second").innerHTML = padZero(second);
}
function padZero(value) {
    return value<10 ? "0" + value : value;
}
setInterval(displaytime,500);