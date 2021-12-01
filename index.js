var angleOne = document.querySelector("#angle-one")
var angleTwo = document.querySelector("#angle-two")
var angleThree = document.querySelector("#angle-three")
var checkButton = document.querySelector("#check-button")
var outputDiv = document.querySelector("#output-div")

checkButton.addEventListener("click",function clickHandler(){
  var su = sumOfAngles(angleOne.value, angleTwo.value, angleThree.value)
  console.log(su)
  if(su === 180){
    outputDiv.innerText = "yahh, triangle works"
  }else if (su === 0) {
    outputDiv.innerText = "enter vailid value"
  }else{
    outputDiv.innerText = "nope, check value once again"

  }
  

})
function sumOfAngles(x,y,z) {
  console.log(x,y,z)
  
  x = Math.floor(x)
  y = Math.floor(y)
  z = Math.floor(z)
  sum = (x+y+z)
  return sum;
}
