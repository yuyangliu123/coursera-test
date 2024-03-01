//this 代表"這個object"
// this就像是一個指示器，它告訴我們正在操作哪一個物件。
// 你可以把它想像成一個書籤，當你在閱讀一本書時，
// 書籤可以幫助你記住你正在讀的頁面。

// 例如，假設我們有一個名為"書"的物件，它有一個方法叫做"打開"。
// 當我們說"書.打開()"時，this就像是一個書籤，指向"書"這個物件，
// 讓"打開"這個方法知道它需要打開的是哪一本書。

// 所以，簡單來說，this就是一個讓程式碼知道它正在操作哪一個物件的方式


//prototype
function c(){
    this.b="abc"; 
    return this.b
};  
const obj ={b:"sdf"}; 
obj.b=c.call(obj)
console.log(obj);
console.log(obj.b )


function Circle(radius){
    this.radius = radius;
}

Circle.prototype.getArea=function(){
    return Math.PI*Math.pow(this.radius,2)
};



var myCircle=new Circle(10);
console.log(myCircle.getArea());

var myOtherCircle=new Circle(20)
console.log(myOtherCircle.getArea());



//"this"
function Animal(name, energy) {
    let animal = Object.create(Animal.prototype);
    animal.name = name;
    animal.energy = energy;
    return animal;
  }
  
  Animal.prototype.eat = function(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  }
  
  Animal.prototype.sleep = function(length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  }
  
  Animal.prototype.play = function(length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  }
  
  const leo = Animal('Leo', 7);
  const snoop = Animal('Snoop', 10);
  console.log(leo);
  console.log(snoop);
  //由於object是by reference 
  //所以執行function後會直接影響原來的值
  leo.sleep(5)
  console.log(leo);
  leo.sleep(8)
