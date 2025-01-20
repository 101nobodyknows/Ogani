let default_btn = document.querySelector("#dftbtn");
let default_btn_in = document.querySelector("#dftinbtn-1");
let default_btn_ex = document.querySelector("#dftinbtn-2");
let default_con = document.querySelector("#dftbtn-con");

default_btn.addEventListener("click", function() {
  default_con.classList.toggle("dftbtn-con-active");
})

default_btn_in.addEventListener("click", function(){
  default_con.classList.remove("dftbtn-con-active");
  default_btn_in.classList.add("dftbtn-active");
  default_btn_ex.classList.remove("dftbtn-active");
})

default_btn_ex.addEventListener("click", function(){
  default_con.classList.remove("dftbtn-con-active");
  default_btn_ex.classList.add("dftbtn-active");
  default_btn_in.classList.remove("dftbtn-active");
})