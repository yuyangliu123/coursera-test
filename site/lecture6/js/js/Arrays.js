//set array

var array = new Array()
array[0]=  "abc",
array[1]=  2,
array[2]=  function(name){
    console.log("Hellow "+ name);
  };
array[3] = {course: " HTML, CSS &JS"}
console.log(array);

//same method
var array1 = [
  "abc",
  2,
  function(name){
    console.log("Hellow "+ name);
  }
];
array1[3] = {course: " HTML, CSS &JS"}

console.log(array1);
console.log(array1[3]);
array1[2]("def");
array1[2](array1[0])
console.log(array1[3].course);

console.log(array1.length);

var array2 = ["abc","def","ghi"]


for(var i = 0 ; i<array2.length;i++){
  console.log("Hello "+array2[i]);
}

var array3 = ["abc","def","ghi"]

var myObj={
  name: "abc",
  weather: "sun",
  food:"bread"
}
for(var prop in myObj){
  console.log(prop +": "+myObj[prop]);
}

myObj.greeting="Hi"
for(var prop in myObj){
  console.log(prop +": "+myObj[prop]);
}
