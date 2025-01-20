var slideIndex = 1;
showSlides(slideIndex);
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

let desc1_btn = document.querySelector("#desc1-top");
let desc2_btn = document.querySelector("#desc2-top");
let desc3_btn = document.querySelector("#desc3-top");

desc1_btn.addEventListener("click", function() {
    desc1_btn.classList.add("label-active");
    desc2_btn.classList.remove("label-active");
    desc3_btn.classList.remove("label-active");
})

desc2_btn.addEventListener("click", function() {
    desc2_btn.classList.add("label-active");
    desc1_btn.classList.remove("label-active");
    desc3_btn.classList.remove("label-active");
})

desc3_btn.addEventListener("click", function() {
    desc3_btn.classList.add("label-active");
    desc2_btn.classList.remove("label-active");
    desc1_btn.classList.remove("label-active");
})

var decVal = document.querySelector("#decrease");
var incVal = document.querySelector("#increase");

incVal.addEventListener("click", function() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
})
  
decVal.addEventListener("click", function() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
})