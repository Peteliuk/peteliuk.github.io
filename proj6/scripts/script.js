const reverse = (n) => {          // Reverse the order of the children of Node n
    let kids = n.childNodes;   // Get the list of children
    let numkids = kids.length; // Figure out how many there are
    for(let i = numkids-1; i >= 0; i--) {  // Loop through them backwards
        let c = n.removeChild(kids[i]);    // Remove a child
        n.appendChild(c);                  // Put it back at its new position
    }
}
let position = 0;
let sliderBack = (k) => {
  let parrent = document.querySelector(".services__slider--content");
  for(let i = 0; i<parrent.childNodes.length; ++i) {
    parrent.offsetWidth = parrent.childElementCount * parrent.childNodes[i].offsetWidth;
  }
  
  position -= parrent.childNodes[3].offsetWidth * k;
  if(position < -1*(parrent.offsetWidth - parrent.childNodes[3].offsetWidth * k)){
    position = 0;
  }
  parrent.style.left = position + 'px';
  console.log("back");
}

const sliderNext = (k) => {
  let parrent = document.querySelector(".services__slider--content");
  for(let i = 0; i<parrent.childNodes.length; ++i) {
    parrent.offsetWidth = parrent.childElementCount * parrent.childNodes[i].offsetWidth;
  }
  
  position += parrent.childNodes[3].offsetWidth * k;
  if(position > 0){
    position = -1*(parrent.offsetWidth - parrent.childNodes[3].offsetWidth * k);
  }
  parrent.style.left = position + 'px';
  console.log("next");
}

document.querySelector(".services__back").onclick = function() {
  sliderBack(2);
}

document.querySelector(".services__next").onclick = function() {
  sliderNext(2);
}

if(screen.width <= 900){
  reverse(document.querySelector(".services__direction"));
  document.querySelector(".services__back").onclick = function() {
    sliderBack(1);
  }

  document.querySelector(".services__next").onclick = function() {
    sliderNext(1);
  }
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.927165, lng: 30.374678},
    zoom: 16,
    disableDefaultUI: true,
  });
  map.setTilt(45);

  var marker = new google.maps.Marker({
  	position: {lat: 59.927165, lng: 30.374678},
  	map: map
  });

}
