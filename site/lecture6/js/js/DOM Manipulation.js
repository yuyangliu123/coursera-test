console.log(document.getElementById("name"));
console.log(document instanceof HTMLDocument); //dose document HTML?
console.log(document.getElementById("name").value);

//button js

function sayHello (){
  var name =document.getElementById("name").value;
  var output = "Hello "+ name + "!"
  document.getElementById("content").textContent=output

}


//change inner HTML format
function changeTitle(){
  var value=document.getElementById("name-title").value
  var output1="<h1>"+ value+"</h1>"
  document.getElementById("title").innerHTML=output1;
}

//change html use textContent
function changeTitle1(){
  var value=document.querySelector("#name-title1").value
  document.querySelector("#title").textContent=value;
}


//change heml use textContent

function sayHello1(){

  var name1=document.getElementById("name1").value
  var output = "Hello "+ name1 + "!"
  document.getElementById("content1").textContent=output

  if(name1==="student"){
    var title=document.querySelector("#title").textContent; //querySelector用法跟css一樣
    title+="abc "
    document.querySelector("#title").textContent=title
  }
}