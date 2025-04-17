const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Rome", "Berlin"],
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter"
    },
    {
        question: "What is the largest animal in our world?",
        options: ["Shark", "Blue Whale", "Elephant", "Giraffe"],
        answer: "Blue Whale"
      },
      {
        question: "What is the largest desert in our world?",
        options: ["Antartica", "Sahara", "Gobi", "Kalahari"],
        answer: "Sahara"
      },
      {
        question: "What is the largest ocean in our world?",
        options: ["Atlantic ocean", "Arctic ocean", "Pacific ocean", "Indian ocean"],
        answer: "Pacific ocean"
      },

      {
        question: "What is the smallest country in the world?",
        options: ["Bhutan", "Vatican city", "Nepal", "Vietnam"],
        answer: "Vatican city"
      },
      {
        question: "Which country is famous for the Great Wall?",
        options: ["India", "Egypt", "Japan", "China"],
        answer: "China"
      },
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();