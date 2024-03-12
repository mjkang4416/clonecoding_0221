let $bt = $(".blank");
let $container = $(".container");
let $pr = $(".pr");
let $sc = $(".sc");
let index = 0; 

$bt.on("click",function(){
    $bt.css("border","1px solid blue");
})

$container.on("click",function(){
    $bt.css("border","1px solid rgb(219, 219, 219");
})

$pr.on("click",function(){
    if(index == 0){
    $sc.css("display","block");
    index++
    }
    else{
    $sc.css("display","none");
    index--; 
    }
})