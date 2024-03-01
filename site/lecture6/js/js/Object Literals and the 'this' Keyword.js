var literalCircle ={ //new Object
  radius: 10,
  getArea: function () {
    console.log(this);
    return Math.PI * Math.pow(this.radius,2)
  }
};

console.log(literalCircle.getArea());

var literalCircle2 ={ //new Object
  radius: 10,

  getArea: function () {
    console.log(this);
    var increaseRadius=function(){ //若在function內再設一個function
      this.radius=20               //則內部的值會變成全域
    };
    increaseRadius()
    console.log(this.radius);
    return Math.PI * Math.pow(this.radius,2)
  }
};

console.log(literalCircle.getArea());


var literalCircle ={ //new Object
  radius: 10,

  getArea: function () {
    var self=this;        //故需要指定this
    console.log(this);
    
    var increaseRadius=function(){
      self.radius=20;     //並將function內的this.radius改為self.radius
    };
    increaseRadius()
    console.log(this.radius);
    return Math.PI * Math.pow(this.radius,2)
  }
};
console.log(literalCircle.getArea());



// Object literals and "this"
var literalCircle = {
  radius: 10,

  getArea: function () {
    var self = this;
    console.log(this);

    var increaseRadius = function () {
      self.radius = 20;
    };
    increaseRadius();
    console.log(this.radius);

    return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(literalCircle.getArea());


function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}
