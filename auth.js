let $mail = $("#email");
let $pw = $(".pw");
let $paswd = $(".pas-box");
let $hi = $(".hi");
let $select = $("#checkAll");
$pw.on("click",Display);
$paswd.on("click",passwd);
$(".ha").on("click",ha);

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

    $select.on('click',function(){ 
        if($select.is(':checked')){
            $('.check').prop('checked',true); }
        else{
            $('.check').prop('checked',false); } });

