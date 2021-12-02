const angleOne = document.querySelector("#angle-one")
const angleTwo = document.querySelector("#angle-two")
const angleThree = document.querySelector("#angle-three")
const checkButton = document.querySelector("#check-button")
const outputDiv = document.querySelector("#output-div")

checkButton.addEventListener("click",function clickHandler(){
  let su = sumOfAngles(angleOne.value, angleTwo.value, angleThree.value)
  
  if(su === 180){
    outputDiv.innerText = "yahh, triangle works"
  }else if (su === 0) {
    outputDiv.innerText = "enter vailid value"
  }else{
    outputDiv.innerText = "nope, check value once again"

  }
})

function sumOfAngles(a,b,c) {
  let x = Math.floor(a)
  let y = Math.floor(b)
  let z = Math.floor(c)
  let sum = (x+y+z)
  return sum;
}
