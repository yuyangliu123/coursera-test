var name = "def";
function sayHi(){
    console.log("Hi "+name);
}

var defGreeter={}
defGreeter.name="def1";
defGreeter.sayHi1=function(){
  console.log("Hi "+defGreeter.name);
}