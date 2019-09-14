$('.carousel').carousel({
	interval: 4000,
	keyboard: false
});

const add = () => {
	document.querySelector("#text").classList.add("animated","flip", "slower");	
}

const rm = () => {
	document.querySelector("#text").classList.remove("animated", "flip", "slower");	
}

func = () => {
	add();
	setTimeout(rm, 5000);
}

setTimeout(add, 5000);
setInterval(func, 10000);
