const quizContainer = document.getElementById('quiz');
const scoreModal = document.getElementById('scoreModal');
const closeButton = document.getElementsByClassName('close')[0];
let score = 0;

const myQuestions = [
  {
    question: "What is 2 + 2?",
    answers: {
      a: "4",
      b: "5",
      c: "6"
    },
    correctAnswer: "a"
  },
  {
    question: "What is 3 x 4?",
    answers: {
      a: "7",
      b: "12",
      c: "9"
    },
    correctAnswer: "b"
  },
  {
    question: "What is 10 - 5?",
    answers: {
      a: "5",
      b: "3",
      c: "10"
    },
    correctAnswer: "a"
  }
];

function buildQuiz() {
  const output = [];

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (const letter in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
      );
    }

    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join('')} </div>`
    );
  });

  quizContainer.innerHTML = output.join('');
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answers');

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      score++;
    }
  });

  document.getElementById('score').innerText = score;
  scoreModal.style.display = 'block';
}

buildQuiz();

document.getElementById('submit').addEventListener('click', showResults);

closeButton.onclick = function() {
  scoreModal.style.display = 'none';
}
