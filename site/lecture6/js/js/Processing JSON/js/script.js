document.addEventListener("DOMContentLoaded",function(event){

    document.querySelector("button")
    .addEventListener("click",function(){

        //call server to get the name
        $ajaxUtils
        .sendGetRequest("data/name.json",
            function(res){
                var message=
                res.firstName+" "+res.lastName;
                if(res.likeChineseFood){
                    message+=" like Chinese food";
                }
                else{
                    message+=" doesn't like Chinese food"
                }
                message+=" and uses ";
                message+=res.numberOfDisplays;
                message+=" displays for coding"
                document.querySelector("#content").innerHTML
                ="<h2>"+message+"</h2>"
            });
            
    })

})


//以下這段code沒有異步
// 因為
// document.querySelector("#content").innerHTML
//                 ="<h2>Hello "+self.name+"</h2>"
// 這段code是在sendGetRequest後方 
// 但sendGetRequest不會在request發送時立刻執行
// 而是要在請求完成並收到回應時才會被執行
// 所以流程會是 'sendGetRequest'->'發送request'->'執行document.querySelector("#content").innerHTML="<h2>Hello "+self.name+"</h2>"'
// ->'請求完成並收到回應'->'self.name=request.responseText'
// 故若要讓'document.querySelector("#content").innerHTML'在ajax請求完成後立即更新'self.name' 就要把整段放進'sendGetRequest'裡


// document.addEventListener("DOMContentLoaded",function(event){
//     document.querySelector("button")
//     .addEventListener("click",function(){
//         var self = this;
//         var name="";
//         //call server to get the name
//         $ajaxUtils
//         .sendGetRequest("data/name.txt",
//             function(request){
//                 self.name=request.responseText;
                
//             });
//             document.querySelector("#content").innerHTML
//                 ="<h2>Hello "+self.name+"</h2>"
//     })

// })