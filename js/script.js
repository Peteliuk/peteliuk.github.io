let video = document.querySelector(".video");
let p = document.querySelectorAll(".content a p");

window.onload = () => {
	video.play();
	document.querySelectorAll(".img").forEach((el) => {
		el.style = "display: none";
		p.forEach((el) => {
			el.style = "padding-left: 75px";
		});
	});
}

p.forEach((el)=>{
	el.onmouseenter = () => {
		el.style = "padding-left: 0";
		el.childNodes[0].style = "display: inline";
	}
	el.onmouseleave = () => {
		el.style = "padding-left: 75px";
		el.childNodes[0].style = "display: none";
	}
});