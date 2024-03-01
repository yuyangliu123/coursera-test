(function(window){
  var defGreeter={}
  defGreeter.name="def1";
  defGreeter.sayHi1=function(){
    console.log("Hi "+defGreeter.name);
  };
  window.defGreeter=defGreeter;
})(window)

