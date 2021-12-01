const submitButton = document.querySelector("#submit-button")
const quizForm = document.querySelector(".quiz-form")
const outputDiv =document.querySelector("#output-div")

var correctAnswer = ["right-angled", "ninety", "Angle that measure less than 90", "Angle that measure more than 90", "angle between 180 & 360"]

function calculateAnswer() {
  var index = 0;
  var score = 0;
var formResults = new FormData(quizForm);
for( let value of formResults.values()){
  console.log(value)
  if(value === correctAnswer[index]){
    score = score + 1;
  }
   index = index + 1 

}
outputDiv.innerText = "Your score is " + score;
}
submitButton.addEventListener('click', calculateAnswer)
 