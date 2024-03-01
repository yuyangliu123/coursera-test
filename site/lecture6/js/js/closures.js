function makeMultiplier (multiplier){

  function b(){
    console.log("Multiplier is: "+multiplier);
  }
  b()
  return (
    function(x){
      return multiplier / x
    }
  );
}

var doubleAll=makeMultiplier(2)
console.log(doubleAll(10));



// Function to increment counter
function add() {
  let counter = 0; 
  counter += 1;
  return counter
}

// Call add() 3 times
add();
add();
add();

console.log(add());
console.log(add());
console.log(add());
