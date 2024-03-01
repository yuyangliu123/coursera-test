//functions are First-class data type
//function are object

function mutiply(x,y){
    return x * y;
}

console.log(mutiply(5,8));

//function factory
function makeMultiplier(multiplier){
    var myFunc = function(x){
        return multiplier * x
    };
    return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(5));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));



//passing functions as arguements
function doOperation(x, operation){
    return operation(x)
};
var result = doOperation(5, multiplyBy3)
console.log(result);
var result1 = doOperation(100 , doubleAll)
console.log(result1);
