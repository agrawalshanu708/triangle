const baseTriangle = document.querySelector("#base-triangle")
const perTriangle = document.querySelector("#per-triangle")
const checkBtn = document.querySelector("#check-button")
const outputDiv = document.querySelector("#output-div")

checkBtn.addEventListener("click", function calculate(){

let bt = baseTriangle.value;
let pt = perTriangle.value;

if(bt>0 && pt>0){

  let hypo = calculateHypo(bt, pt)
  outputDiv.innerText = "hypotenuse "+hypo

}else{
  outputDiv.innerText = "Invalid Entry, please check the value once again"
}
})

function calculateHypo (x,y){
  let z = Math.sqrt(Math.floor(x)*Math.floor(x) + Math.floor(y)*Math.floor(y))
  return z;
}