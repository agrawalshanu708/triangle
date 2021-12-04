const triangleBase = document.querySelector("#triangle-base")
const triangleHeight = document.querySelector("#triangle-height")
const checkButton = document.querySelector("#check-button")
const outputDiv = document.querySelector("#output-div")

checkButton.addEventListener("click", function clickCalculate(){

 let tb = Math.floor(triangleBase.value);
 let th = Math.floor(triangleHeight.value);

 if( tb > 0 && th > 0 ){

  let area = calculateArea(tb, th)
  outputDiv.innerText = "Area " +area;

 }else{
   outputDiv.innerText = "Invalid Entry, please check the value once";
}
})

function calculateArea(x,y){
  x = Math.floor(x)
  y = Math.floor(y)
  area = (x*y)/2
  return area
}



















 


