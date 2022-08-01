// Javascript for 4_Code_Quiz
var startButton = document.getElementById('start-button');
var startQuizEl = document.getElementById('start-quiz');
var questionEl = document.getElementById('questionaire');
var scoreScreen = document.querySelector('#score-screen');
var endQuizEl = document.getElementById('end-quiz')
var timerEl = document.querySelector('.timer-count');
var scoreEl = document.querySelector('.score');


var timerCount = 75;
var timeInterval;
var timer;
// Event listener for the Start Quiz button.
startButton.addEventListener('click', startQuiz);

// Function to start the quiz.  Hides first section and shows questionaire section.
function startQuiz() {
    startQuizEl.classList.add('hide');
    questionEl.classList.remove('hide');
    showQuestion();
    startTimer();
}

// Timer function.  Starts timer and ends quiz when timer is <=0
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount <= 0) {
            endQuiz();
        }
    }, 1000);
}

// Variable and function to prompt question with answer choices.
var promptEl = document.querySelector('.prompt');
var choiceOne = document.querySelector('.choice-1');
var choiceTwo = document.querySelector('.choice-2');
var choiceThree = document.querySelector('.choice-3');
var choiceFour = document.querySelector('.choice-4');
var quizNumber = 0;

function showQuestion() {
    var currentQuestion = quiz[quizNumber];
    if (quizNumber == quiz.length) {
        endQuiz();
    } else {
        promptEl.innerHTML = currentQuestion.prompt;
        choiceOne.innerHTML = currentQuestion.choices[0];
        choiceTwo.innerHTML = currentQuestion.choices[1];
        choiceThree.innerHTML = currentQuestion.choices[2];
        choiceFour.innerHTML = currentQuestion.choices[3];  
    }
}

// event listner and function for picking answer
choiceOne.addEventListener("click", renderAnswer);
choiceTwo.addEventListener("click", renderAnswer);
choiceThree.addEventListener("click", renderAnswer);
choiceFour.addEventListener("click", renderAnswer);

function renderAnswer (event) {
    var selectedChoice = event.target;
    if (selectedChoice.textContent === quiz[quizNumber].answer) {
        quizNumber++;
        showQuestion();
    } else {
        timerCount -= 10;
        quizNumber++;
        showQuestion();
    }
}

// End quiz function.  Hides quiz section and shows user input section.
function endQuiz() {
    questionEl.classList.add('hide');
    endQuizEl.classList.remove('hide');
    scoreEl.textContent = timerCount;
    // timerEl.textContent = timerCount;
    clearInterval(timer);
}

// Saving score into local storage
var nameInput = document.querySelector('#name');
var submitBtn = document.querySelector('#submit-button');
var userScoreEl = document.querySelector('.score');
submitBtn.addEventListener('click', saveScore);
var highScores = [];
var scoreString = [];
var userInfo;

function saveScore(event) {
    event.preventDefault();
    endQuizEl.classList.add('hide');
    scoreScreen.classList.remove('hide');

    var userInfo = {
        userScore: timerCount,
        userName: nameInput.value
    };

    highScores.push(userInfo);
    localStorage.setItem('userInfo', JSON.stringify(highScores));
    viewHighScore();
}


// High score screen.
var savedNameEl = document.querySelector('#savedName');

function viewHighScore() {

    savedNameEl.innerHTML = "";
    
    var highScoreList = JSON.parse(localStorage.getItem('userInfo')) || [];

    for (var i = 0; i < highScoreList.length; i++) {
        var list = document.createElement('li');
        list.innerHTML = highScoreList[i].userName + " - " + highScoreList[i].userScore;
        savedNameEl.appendChild(list);
    }
}


// Back and clear score buttons
var backButton = document.querySelector('.back-button');
backButton.addEventListener('click', backToTop);

function backToTop() {
    startQuizEl.classList.remove('hide');
    scoreScreen.classList.add('hide');
    quizNumber = 0;
    timerCount = 75;
}

var clearScoreButton = document.querySelector('.clear-score');
clearScoreButton.addEventListener('click', clearScore)

function clearScore() {
    window.localStorage.clear();
    savedNameEl.textContent = "";
}

var viewScore = document.querySelector('.view-score');
viewScore.addEventListener('click', viewHighScoreList);

function viewHighScoreList() {
    startQuizEl.classList.add('hide');
    scoreScreen.classList.remove('hide');
}


// Array of prompts and answers for the quiz.
var quiz = [
    {
        prompt: 'Javascript is an _______ language.',
        choices: ['Object-Oriented', 'Object-Based', 'Procedural', 'None of the above'],
        answer: 'Object-Oriented'  
    },
    {
        prompt: 'Which of the following keywords is used to define a variable in Javascript?',
        choices: ['var', 'let', 'A and B', 'None of the above'],
        answer: 'A and B'
    },
    {
        prompt: 'How can a datatype be declared to be a constant type?',
        choices: ['const', 'var', 'let', 'constant'],
        answer: 'const'
    },
    {
        prompt: "When an operators value is NULL, the typeof returned by the unary operator is:",
        choices: ['Boolean', 'Undefined', 'Object', 'integer'],
        answer: "Object"
    },
    {
        prompt: "Which function is used to serialize an object into a JSON string in Javascript?",
        choices: ['parse', 'stringify', 'convert', 'None of the above'],
        answer: 'stringify'
    }
]

