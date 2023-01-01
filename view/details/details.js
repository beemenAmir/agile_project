// const main=document.querySelector("#maincontent")
// function buildcolumn (text,img ){
//     const column = document.createElement("div") 
//     column.classList.add("column1")
//     column.innerText=text
//     column.innerHTML
//     main.appendChild(column)
// }
// buildcolumn("ggdtg")
// const data =["dfrfr","dfrfr","dfrfr","dfrfr","dfrfr","dfrfr",]
// data.map(e=>buildcolumn(e))

let name = localStorage.getItem('animalname');
let loc = localStorage.getItem('animalplace');
let picture = localStorage.getItem('imgs');
let age = localStorage.getItem('age');
let type = localStorage.getItem('type');
console.log(name);
console.log(loc);
console.log(picture);
console.log(age);

document.getElementById("animal name").value = name;
document.getElementById("age").value = "4 years";
document.getElementById('animalPic').src = picture;
document.getElementById('loc').value = loc;
document.getElementById('animal type').value = type;

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}