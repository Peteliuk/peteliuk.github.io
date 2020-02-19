const b = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h",
"j", "k", "l", "z", "x", "c", "v", "b", "n", "m", ".", ","];

const b_shift = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H",
"J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", ".", ","];

const b_ua = ["ш", "щ", "з", "х", "ї", "ф", "і", "в", "а", "п", "р", "о", "л", "д", "ж", "є",
"я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", ",", "ґ", "й", "ц", "у", "к", "е", "н", "г"];

const b_shift_ua = ["Ш", "Щ", "З", "Х", "Ї", "Ф", "І", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Є",
"Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", ",", "Ґ", "Й", "Ц", "У", "К", "Е", "Н", "Г"];

let count_caps = 0;
let count_lang = 0;
let count_symb = 0;
let text = document.querySelector(".text");

let j = -1;
const mass = (arr) => {
	++j;
	if(j < arr.length){
		return arr[j];
	}
	else {
		j = 0;
		return arr[j];
	}
}

const func = (param, func, k) => {
	if(k == null) {
		document.querySelector(param).onclick = func;
	}
	else if(k == "all") {
		document.querySelectorAll(param).forEach(func);
	}
}

const paramStyle = (param, css) => {
	document.querySelector(param).style = css;
}

func(".caps", (element) => {
	element.onclick = () => {
		count_caps += 1;	
		if(count_caps % 2){
			func(".key", (element) => {element.innerHTML = mass(b_shift)}, "all");
			func(".key_ua", (element) => {element.innerHTML = mass(b_shift_ua)}, "all");
		}
		else {
			func(".key", (element) => {element.innerHTML = mass(b)}, "all");
			func(".key_ua", (element) => {element.innerHTML = mass(b_ua)}, "all");
		}	
	}
}, "all");

func(".key_symb", (element) => {
	element.onclick = () => {
		text.value += element.textContent;	
	}
}, "all");

func(".key_ua", (element) => {
	element.onclick = () => {
		text.value += element.textContent;
	}
}, "all");

func(".key", (element) => {
	element.onclick = () => {
		text.value += element.textContent;
	}
}, "all");

func(".backspace", (element) => {
	element.onclick = () => {
		text.value = text.value.substring(0, text.value.length - 1);	
	}
}, "all");

func(".space", () => {text.value += " ";});
func(".space_ua", () => {text.value += " ";});
func(".space_symb", () => {text.value += " ";});

func(".lang", (element) => {
	element.onclick = () => {
		count_lang += 1;
		if(!(count_lang % 2)){
			paramStyle(".polosa1", "left: 0");
		}
		else{
			paramStyle(".polosa1", "left: -850px");
		}	
	}
}, "all");

func(".symb", (element) => {
	element.onclick = () => {
		count_symb += 1;
		if(!(count_symb % 2)){
			paramStyle(".polosa", "top: 0");
		}
		else{
			paramStyle(".polosa", "top: -300px");
		}	
	}
}, "all");

func(".enter", (element) => {
	element.onclick = () => {
		document.querySelector(".res").innerHTML = text.value;	
	}
}, "all");