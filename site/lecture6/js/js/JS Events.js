document.addEventListener("DOMContentLoaded",function(event) {
  //button js

function sayHello (){
  console.log(this);
  var name =document.getElementById("name").value;
  var output = "Hello "+ name + "!"
  document.getElementById("content").textContent=output

}

document.querySelector("button#b1").addEventListener("click",sayHello)

//or

//document.querySelector("button").onclick=sayHello;


//use addEventListener,we know "this"(the button), 
//and can change it when click the button
function sayHello1 (){
  console.log(this);
  this.textContent="change text"
  var name =document.getElementById("name1").value;
  var output = "Hello "+ name + "!"
  document.getElementById("content1").textContent=output

}

document.querySelector("button#b2").addEventListener("click",sayHello1)
})


