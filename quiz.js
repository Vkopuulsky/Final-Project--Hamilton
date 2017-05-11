function checkAllAnswers() {
  var quizScore = 0
  var questionOneAnswer = document.querySelector("input[name='first']:checked").value
  if (questionOneAnswer == "Carribean") {
    quizScore = quizScore + 1
  }
  var questionTwoAnswer = document.querySelector("input[name='two']:checked").value
  if (questionTwoAnswer == "AB") {
    quizScore = quizScore + 1
  }
  var questionThreeAnswer = document.querySelector("input[name='Three']:checked").value
  if (questionThreeAnswer == "AS") {
    quizScore = quizScore + 1
  }
 var questionFourAnswer = document.querySelector("input[name='four']:checked").value
  if (questionFourAnswer == "JL") {
    quizScore = quizScore + 1
  }
  var questionFiveAnswer = document.querySelector("input[name='five']:checked").value
  if (questionTwoAnswer == "MR") {
    quizScore = quizScore + 1
  }
  var questionSixAnswer = document.querySelector("input[name='six']:checked").value
  if (questionSixAnswer == "not right") {
    quizScore = quizScore + 1
  }
  var questionSevenAnswer = document.querySelector("input[name='seven']:checked").value
  if (questionSevenAnswer == "sadly") {
    quizScore = quizScore + 1
  }
  var questionEightAnswer = document.querySelector("input[name='eight']:checked").value
  if (questionEightAnswer == "wish") {
    quizScore = quizScore + 1
  }
  var questionNineAnswer = document.querySelector("input[name='nine']:checked").value
  if (questionNineAnswer == "sadly") {
    quizScore = quizScore + 1
  }
  var questionTenAnswer = document.querySelector("input[name='ten']:checked").value
  if (questionTenAnswer == "sadly") {
    quizScore = quizScore + 1
  }
  
  alert("Your score is...")
  alert(quizScore)
}