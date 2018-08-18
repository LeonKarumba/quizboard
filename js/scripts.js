function check()  {

  var questionOne =document.Quiz.value;
  var questionTwo =document.Quiz.value;
  var questionThree =document.Quiz.value;
  var questionFour =document.Quiz.value;
  var correct =0;

}

if (questionOne === "Brendan Eich") {
  correct += 25;
}
if (questionTwo === "1995") {
  correct += 25;
}
if (questionThree === "A programming language")  {
  correct += 25;
}
if (questionFour === "It can be exploited for malicious processes")  {
  correct += 25;
}

var messages = ["Wasted a few minutes of your life,try something you are passionate about?",  "You tried but pull up your socks!", "How close can you get?", "Superb performance,simply amazing!"];

var range;

  if(correct < 25) {
    range = 0;
  }

  if(correct < 50) {
    range = 1;
  }

  if(correct < 75) {
    range = 2;
  }

  if(correct > 75) {
    range = 3;
  }

{
  document.getElementById("message").innerHTML =messages[range];
  document.getElementById("number_correct").innerHTML ="You managed to score" + correct + "correct";

}
