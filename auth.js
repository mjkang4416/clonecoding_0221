let $mail = $("#email");
let $pw = $(".pw");
let $paswd = $(".pas-box");
let $hi = $(".hi");
let select = $(".all-check");
$pw.on("click",Display);
$paswd.on("click",passwd);
$(".ha").on("click",ha);

select.on("click",checkAll);

function Display(){
    if($mail.val()==''){
    // $(".pl").css("display","block");
    $mail.css("border-color","#f77");
    $mail.css("outline","#f77");
    }
    else{
    //  $(".pl").css("display","none");
     $mail.css("border-color","#dbdbdb");
     $(".in").css("border-color","#dbdbdb");
     $(".in").css("background-color","#fff");
     $(".in").css(" border-color","#35c5f0");
     $(".in").css("color","#35c5f0");
}
}

function passwd(){
    if($paswd.val()==''){
    $("#h").css("display","block");
    $paswd.css("border-color","#f77");
    $paswd.css("outline","#f77");
    }
    else{
     $("#h").css("display","none");
     $paswd.css("border-color","#dbdbdb");
}
}

function ha(){
    if($(".ha").val()==''){
    $("#ha").css("display","block");
    $(".ha").css("border-color","#f77");
    $(".ha").css("outline","#f77");
    }
    else{
     $("#ha").css("display","none");
     $(".ha").css("border-color","#dbdbdb");
}
}

function checkAll(){
    if($(".all-check").checked==true){ 
          for(var i=0;i<3;i++) ("checkBox")[i].checked=true;   //name 을 사용하여 배열 형태로 담아 호출
       }
       if(document.getElementById("all-check").checked==false){
          for(var i=0;i<3;i++) document.getElementsByName("checkBox")[i].checked=false;  
       }
 }