var p = "JS has 8 build-in type, 7 primitive and 1 object type"
console.log(p);

// Numbers:
let length = 16;
let weight = 7.5;

console.log("number" + length + weight);
console.log( length + weight + "number");

// Strings:
let color = "Yellow";
let lastName = "Johnson";
console.log("string: "+color + " " + lastName);

// Booleans
let x = 5;
let y = 6;
let z =7
console.log("booleans");
console.log(x<y);
console.log(y>z);
// Object:
const person = {firstName:"John", lastName:"Doe"};

console.log("object");
console.log(person );
console.log(person.firstName );

// Array object:
const cars = ["Saab", "Volvo", "BMW"];
console.log("array");
console.log(cars[0]);

// Date object:
const date = new Date("2022-03-25");
console.log(date);
console.log(date.getDate());

//undefined:
let car;    // Value is undefined, type is undefined
console.log(car);
car1 = undefined;    // Value is undefined, type is undefined
console.log(car1);

//should be undefined
var a;
console.log(a);

if (a==undefined) {
    console.log("a is undefined");
}

a=5
if (a==undefined) {
    console.log("a is undefined");
}
else{
    console.log("a has been defined");
}