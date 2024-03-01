// string concatination
var string = "Hello"
string +=" World"
//string = string + " world"
console.log(string+"!");

//regular math operators: + - * /
console.log((5+4)*3);
console.log(undefined/3);
function test1(a) {
    console.log(a/5);
}
test1();

//equality
var x=4,y=4;
if(x==y){
    console.log("x=4 is equal to y=4");
}

x="4"
if(x==y){
    console.log("x='4' is equal to y=4");
}

// Strict equality operator (===) differs from 
// regular equality operator (==) in that it checks
//  if both values on its right and left are of the
//   same type first. If they are not, it doesn't 
//   try to coerce them to be the same value and 
//   just returns false.

if (x===y) {
    console.log("strict: x='4' is equal to y=4");
}
else{
    console.log("strict: x='4' is not equal to y=4");

}

//best pratice for {} style
//Curly brace on the same or next line
// is it just a style?

function a() 
{
    return
    {
        name:"abc"
    }
}

function b() {
    return{
        name:"abc"
    }
}

console.log(a());
console.log(b());


//for loop
var sum = 0;
for(var i = 0; i<10; i++ /*i = i+1*/){
    console.log(sum);
    sum=sum+i
}
console.log("sum of 0 through 9 is: "+sum);
