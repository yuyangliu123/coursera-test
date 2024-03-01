(function(window){
  var abcGreeter={}
  abcGreeter.name="abc1";
  abcGreeter.sayHello1=function(){
    console.log("Hello "+abcGreeter.name);
  }
  window.abcGreeter=abcGreeter;
})(window);




