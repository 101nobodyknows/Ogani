let categbtn = document.querySelector(".button-1");
let categs = document.querySelector(".categs");
let all_cat = document.querySelector(".all-cat");

categbtn.addEventListener("click", function() {
	categs.classList.toggle("categopen");
	if (x.matches) {
		all_cat.classList.toggle("all-cat-top");
	}
})

var x = window.matchMedia("(max-width: 991px)");

let fru_con = document.querySelector("#fru-frs-scroll");
let catPrev = document.querySelector("#catprev");
let catNext = document.querySelector("#catnext");

catNext.addEventListener("click", function(){
	fru_con.classList.add("fru-frs-scrolled");
})

catPrev.addEventListener("click", function(){
	fru_con.classList.remove("fru-frs-scrolled");
})