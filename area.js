const triangleBase = document.querySelector("#triangle-base")
const triangleHeight = document.querySelector("#triangle-height")
const checkButton = document.querySelector("#check-button")
const outputDiv = document.querySelector("#output-div")

checkButton.addEventListener("click", function clickCalculate(){
  let area = calculateArea(triangleBase.value, triangleHeight.value)
  outputDiv.innerText = "Area " +area;
})



function calculateArea(x,y){
  x = Math.floor(x)
  y = Math.floor(y)
  area = (x*y)/2
  return area
}