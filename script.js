// Define the Quiz questions
const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Mars", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answer: [
            { text: "Atlantic Ocean", correct: false},
            { text: "Indian Ocean", correct: false},
            { text: "Southern Ocean", correct: false},
            { text: "Pacific Ocean", correct: true}
        ]
    },
];
// Variables to keep track of quiz state
let currentQuestionIndex = 0;
let score = 0;

//Get DOM elements
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const startContainer = document.getElementById("start-container");
const startButton = document.getElementById("start-btn");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");

// Event listener for starting the quiz
startButton.addEventListener("click", startQuiz);

// Event listener for restarting the quiz
restartButton.addEventListener("click", restartQuiz);

// Function to start the quiz
function startQuiz() {
    startContainer.classList.add("hide");
    questionContainer.classList.remove("hide");
    showQuestion();
}

// Function to restart the quiz
function restartQuiz() {
    resultContainer.classList.add("hide");
    questionContainer.classList.remove("hide");
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

//fuction to show the current question
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    answerButtonsElement.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer.correct));
        answerButtonsElement.appendChild(button);
    });
}

// Function to handle answer selection
function selectAnswer(isCorrect) {
    if (isCorrect) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Function to show the question result
function showResult() {
    questionContainer.classList.add("hide");
    resultContainer.classList.remove("hide");
    scoreElement.innerText = `You got ${score} out of ${questions.length} questions correct.`;
}