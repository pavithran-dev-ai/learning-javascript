//This keyword refers the current object
//method => obj
//function => global (window,global)
 function myfun(myname,address){
    this.myname = myname;
    this.address = address;
    console.log(this.myname);
 }
 let obj = new myfun("pavithran","Dharapuram");//{}
 let myinfo = {
    Name : "Pavithran",
    Role : "Web Developer",
    Experience : "Fresher",
    getobj(){
        console.log(this)
    },
    //this kw are used to access the object Properties
    getinfo(){
        console.log(this.Name);
        console.log(this.Role);
        console.log(this.Experience)
    }
 }
 myinfo.getobj();
 myinfo.getinfo();
 //this is the reference variable
 //used to refer the current object