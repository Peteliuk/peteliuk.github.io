let scroll_start = 0,
    startchange = $("#startchange"),
    offset = startchange.offset();
startchange.length && $(document).scroll(function() {
    (scroll_start = $(this).scrollTop()) > offset.top ? $(".navbar").css("background-color", "#b2acc8") : $(".navbar").css("background-color", "transparent")
});


let turnVal = 0;
let sliderItems = document.querySelector(".slider-items");
    
const sliderLeft = () => {
    turnVal -= 400;
    if(turnVal < -1925){
        turnVal = 0;
    }
    sliderItems.style.left = turnVal + "px";
    console.log("left");
}

const sliderRight = () => {
    turnVal += 400;
    if(turnVal > 0){
        turnVal = 0;
    }
    sliderItems.style.left = turnVal + "px";
    console.log("right");
}
document.querySelector(".slideLeft").onclick = sliderRight;
document.querySelector(".slideRight").onclick = sliderLeft;