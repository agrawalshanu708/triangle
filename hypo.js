var baseTriangle = document.querySelector("#base-triangle")
var perTriangle = document.querySelector("#per-triangle")
var checkBtn = document.querySelector("#check-button")
var outputDiv = document.querySelector("#output-div")

checkBtn.addEventListener("click", function calculate(){
  var hypo = calculateHypo(baseTriangle.value, perTriangle.value)
  
  outputDiv.innerText = "hypotenuse "+hypo
})

function calculateHypo (x,y){
  x = Math.floor(x);
  y= Math.floor(y)
  var z = (x*x) + (y*y)
  var z = Math.sqrt(z)
  return z;
}