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

var decVal2 = document.querySelector("#decrease2");
var incVal2 = document.querySelector("#increase2");

incVal2.addEventListener("click", function() {
    var valuee = parseInt(document.getElementById('number2').value, 10);
    valuee = isNaN(valuee) ? 0 : valuee;
    valuee++;
    document.getElementById('number2').value = valuee;
})
  
decVal2.addEventListener("click", function() {
    var valuee = parseInt(document.getElementById('number2').value, 10);
    valuee = isNaN(valuee) ? 0 : valuee;
    valuee < 1 ? valuee = 1 : '';
    valuee--;
    document.getElementById('number2').value = valuee;
})

var decVal3 = document.querySelector("#decrease3");
var incVal3 = document.querySelector("#increase3");

incVal3.addEventListener("click", function() {
    var valueee = parseInt(document.getElementById('number3').value, 10);
    valueee = isNaN(valueee) ? 0 : valueee;
    valueee++;
    document.getElementById('number3').value = valueee;
})
  
decVal3.addEventListener("click", function() {
    var valueee = parseInt(document.getElementById('number3').value, 10);
    valueee = isNaN(valueee) ? 0 : valueee;
    valueee < 1 ? valueee = 1 : '';
    valueee--;
    document.getElementById('number3').value = valueee;
})