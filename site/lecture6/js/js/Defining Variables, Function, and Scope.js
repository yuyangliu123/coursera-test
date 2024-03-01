var message = "in global";
console.log("global: message = " + message);

var a = function(){
    var message = "inside a"
    console.log("a : message = "+message);
    b()
}

function b() {
    console.log("b : message = " + message);
}

var d = function(){
    var message = "inside d"
    console.log("d : message = "+message);
    e()
    function e() {
        console.log("e : message = " + message);
    }
}

a()
d()