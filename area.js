var triangleBase = document.querySelector("#triangle-base")
var triangleHeight = document.querySelector("#triangle-height")
var checkButton = document.querySelector("#check-button")
var outputDiv = document.querySelector("#output-div")

checkButton.addEventListener("click", function clickCalculate(){
  var area = calculateArea(triangleBase.value, triangleHeight.value)
  outputDiv.innerText = "Area " +area;
})



function calculateArea(x,y){
  x = Math.floor(x)
  y = Math.floor(y)
  area = (x*y)/2
  return area;
}