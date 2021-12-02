const baseTriangle = document.querySelector("#base-triangle")
const perTriangle = document.querySelector("#per-triangle")
const checkBtn = document.querySelector("#check-button")
const outputDiv = document.querySelector("#output-div")

checkBtn.addEventListener("click", function calculate(){
  let hypo = calculateHypo(baseTriangle.value, perTriangle.value)
  
  outputDiv.innerText = "hypotenuse "+hypo
})

function calculateHypo (x,y){
  let z = Math.sqrt(Math.floor(x)*Math.floor(x) + Math.floor(y)*Math.floor(y))
  return z;
}