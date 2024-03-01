array = ["john","Jack","abc","gnaseoik","lkjhgf","jjoognn"]
greeting=function(x){
    for(var i =0; i<x.length; i++){
        regex=/^[Jj]/;
        tf=regex.test(x[i])
        if(tf==true){
            console.log("Goodbye "+x[i]);
        }else{
            console.log("Hello "+x[i]);
        }
    }
}

greeting(array)