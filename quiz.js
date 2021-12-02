const submitButton = document.querySelector("#submit-button")
const quizForm = document.querySelector(".quiz-form")
const outputDiv =document.querySelector("#output-div")

const correctAnswer = ["right-angled", "ninety", "Angle that measure less than 90", "Angle that measure more than 90", "angle between 180 & 360"]

function calculateAnswer() {
  let index = 0;
  let score = 0;

  const formResults = new FormData(quizForm);
  for( let value of formResults.values()){
  
  if(value === correctAnswer[index]){
    score = score + 1;
  }
   index = index + 1 

}
outputDiv.innerText = "Your score is " + score;
}
submitButton.addEventListener('click', calculateAnswer)
 