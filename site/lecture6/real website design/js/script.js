$(function(){ //same as document.addEventListener("DOMContentLoaded"...)

    //same as document.querySelector("#navbarToggle").addEventListener("blur",...)
    $("#navbarToggle").blur(function(event){
        var screenWidth = window.innerWidth;
        if(screenWidth<768){
            $("#navbarSupportedContent").collapse('hide')
        }
    })
})
