//Cortes, Liliana 


window.onload = start;

var triviaQuestions;
var question1, question2, question3, question4, question5, question6, question7, question8, question9, question10;
var correctAnswers=0;
var questionsAnswered=0;
var timeInSeconds;
var timer;


function createQuestion (quote, answer1, answer2, answer3, correctAnswer, image) {
  this.question=question;
  this.answer1=answer1;
  this.answer2=answer2;
  this.answer3=answer3;
  this.correctAnswer=correctAnswer;
  this.image=image;
}

function start(){
  $("#questionSection").hide();
  $("#answerSection").hide();
  $("questionResult").hide();
  $("#gameResult").hide();
  question1 = new createQuestion("The Chihuahua is a breed of dog believed to originate from what country?","France","Germany","England","Mexico", "assets/images/chihuahua.jpg");
  question2 = new createQuestion("What is the most popular breed of dog in the United States?", "Labrador Retriever", "Chihuahua", "German Shepherd", "Pug", "assets/images/labradorretriever.jpg");
  question3 = new createQuestion("In the United States which breed of dog is commonly known as a firehouse dog?","Labrador Retriever", "Dalmatian", "Pitbull","German Shepherd", "assets/images/dalmatian.jpg");
  question4 = new createQuestion("The dingo is a free ranging dog found mainly in which country?","France","Russia","Australia","Mexico","assets/images/dingo.png");
  question5 = new createQuestion("How many chambers are there in a dog's heart?", "5", "4", "3","2", "assets/images/pug.jpeg");
  question6 = new createQuestion("Normal adult dogs have how many teeth?","24","38","42","32", "assets/images/dogteeth.jpg");
  question7 = new createQuestion("Through what part of the body do dogs sweat?","Mouth","Ears","Nose","Paws", "assets/images/paws.jpg");
  question8 = new createQuestion("Which dog breed is the smallest of them all?", "Dachshund", "Shih Tzu", "Pomeranian", "Chihuahua", "assets/images/chihuahua.jpg");
  question9 = new createQuestion("Which dog breed has a black tongue?", "Husky", "Labrador", "Weimaraner", "Chow Chow", "assets/images/chowchow.jpg");
  question10 = new createQuestion("What is the dog's most highly developed sense?", "Taste", "Smell", "Sight","Touch", "assets/images/dogssniffbutts.jpg");
  triviaQuestions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
}

$("#startButton").on("click", function() {
  startGame();
});
$(document).ready(function() {
    $("#answer1").on("click", function() {
      checker(0);
    });
    $("#answer2").on("click", function() {
      checker(1);
    });
    $("#answer3").on("click", function() {
      checker(2);
    });
    $("#answer4").on("click", function() {
      checker(3);
    });
});
function startGame() {
  if (questionsAnswered==10) {
    gameResults();
  }
  else{
  clearInterval(timer);
  timeInSeconds=30;
  timer = setInterval(function() {
    $("#timer").html("Time Remaining: " + timeInSeconds);
    timeInSeconds--;
    if (timeInSeconds < 0) {
      questionNotAnswered();
    }
  }, 1000);
  $("#question").html(triviaQuestions[questionsAnswered].quote);
  $("#answer1").html(triviaQuestions[questionsAnswered].answer1);
  $("#answer2").html(triviaQuestions[questionsAnswered].answer2);
  $("#answer3").html(triviaQuestions[questionsAnswered].answer3);
  $("#answer4").html(triviaQuestions[questionsAnswered].answer4);
  $("#questionResult").hide();
  $("#gameResult").hide();
  $("#playButton").hide();
  $("#questionSection").show();
  $("#answersSection").show();
  }
}
function checker(chosenAnswer) {
  clearInterval(timer);
  $("#timer").html("Time Remaining:");
  $("#questionSection").hide();
  $("#answersSection").hide();
  $("#questionResult").show();
  questionsAnswered++;
  if (chosenAnswer == 0 && triviaQuestions[questionsAnswered-1].answer1 == triviaQuestions[questionsAnswered-1].correctAnswer) {
    questionCorrect();
  }
  else if (chosenAnswer == 1 && triviaQuestions[questionsAnswered-1].answer2 == triviaQuestions[questionsAnswered-1].correctAnswer) {
    questionCorrect();
  }
  else if (chosenAnswer == 2 && triviaQuestions[questionsAnswered-1].answer3 == triviaQuestions[questionsAnswered-1].correctAnswer) {
    questionCorrect();
  } 
  else if (chosenAnswer == 3 && triviaQuestions[questionsAnswered-1].answer4 == triviaQuestions[questionsAnswered-1].correctAnswer) {
    questionCorrect();
  }
  else {
    questionIncorrect();
  } 
}

function questionCorrect() {
  correctAnswers++;
  timeInSeconds=5;
  timer = setInterval(function() {
    timeInSeconds--;
    if (timeInSeconds < 0) {
      startGame();
    }
  }, 1000);
  $("#questionAnswer").html("Correct!: "+ triviaQuestions[questionsAnswered-1].correctAnswer);
  $("#correctAnswerPic").attr("src", triviaQuestions[questionsAnswered-1].image);
}

function questionIncorrect() {
  timeInSeconds=5;
  timer = setInterval(function() {
    timeInSeconds--;
    if (timeInSeconds < 0) {
      startGame();
    }
  }, 1000);
  $("#questionAnswer").html("Nope! The correct answer was: " + triviaQuestions[questionsAnswered-1].correctAnswer);
  $("#correctAnswerPic").attr("src", triviaQuestions[questionsAnswered-1].image);
}

function questionNotAnswered() {
  clearInterval(timer);
  $("#timer").html("Time Remaining:");
  $("#questionSection").hide();
  $("#answersSection").hide();
  $("#questionResult").show();
  questionsAnswered++;
  timeInSeconds=5;
  timer = setInterval(function() {
    timeInSeconds--;
    if (timeInSeconds < 0) {
      startGame();
    }
  }, 1000);
  $("#questionAnswer").html("Nope! The correct answer was: " + triviaQuestions[questionsAnswered-1].correctAnswer);
  $("#correctAnswerPic").attr("src", triviaQuestions[questionsAnswered-1].image);
}

function gameResults() {
  $("#questionResult").hide();
  $("#gameResult").show();
  $("#gameStats").html("Game Over! You answered " + correctAnswers + " out of " + questionsAnswered + " correct!");
}

$("#playAgainButton").on("click", function(){
  questionsAnswered=0;
  correctAnswers=0;
  startGame();
});


