//슬라이드틀
let $bannerBox = $(".banner-box");
//이미지
let $img = $(".b-img");
//넓이
let width = 253;
//인덱스번호
let index = 0; 
//이미지수 
let ImgNum = $img.length;
//간격
let slideInterval;


function startSlide(){
    slideInterval = setInterval(function(){
        moveNext();
    },3000);
}

startSlide()

function stopSlide(){
    clearInterval(slideInterval);
}

function moveNext(){
    index++;
    if(index >= ImgNum){
        index = 0; 
    }
    $bannerBox.css("left",-(index*width));
    $bannerBox.css("transition","0.2s ease");
    checkEnd();
}

function movePrev(){
    index--;
    $bannerBox.css("left", -(index * width));
    $bannerBox.css("transition", "0.2s ease");
    checkEnd() 
}

$(".next").on("click",function(){
    moveNext();
    stopSlide();
})

$(".prev").on("click",function(){
    movePrev();
    stopSlide();
})






function checkEnd() {
    if (index <= 0) {
        $(".prev").css("display", "none");
    } else {
        $(".prev").css("display", "block");
    }

    if (index >= ImgNum - 1) {
        $(".next").css("display", "none");
    } else {
        $(".next").css("display", "block");
    }
}

