const angleOne = document.querySelector("#angle-one")
const angleTwo = document.querySelector("#angle-two")
const angleThree = document.querySelector("#angle-three")
const checkButton = document.querySelector("#check-button")
const outputDiv = document.querySelector("#output-div")

checkButton.addEventListener("click",function clickHandler(){

  let a1 = angleOne.value;
  let a2 = angleTwo.value;
  let a3 = angleThree.value;

  if(a1>0 && a2>0 && a3>0){

    let s = sumOfAngles(a1, a2, a3)
  
  if(s === 180){
    outputDiv.innerText = "yahh, Triangle works"
  }else{
    outputDiv.innerText = "NO, Triangle can't be formed"

  }
  }else {
    outputDiv.innerText = "Invalid entry"
  }
})

function sumOfAngles(a,b,c) {
  let x = Math.floor(a)
  let y = Math.floor(b)
  let z = Math.floor(c)
  let sum = (x+y+z)
  return sum;
}
