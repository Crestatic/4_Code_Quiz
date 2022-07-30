// Javascript for 4_Code_Quiz
var startButton = document.getElementById('start-button');
var startQuizEl = document.getElementById('start-quiz');
var questionaireEl = document.getElementById('questionaire');
var timerEl = document.querySelector('.timer-count');


var timerCount = 75;

// Event listener for the Start Quiz button.
startButton.addEventListener('click', startQuiz);

function startQuiz() {
    startQuizEl.classList.add('hide');
    questionaireEl.classList.remove('hide');
    nextQuestion();
    startTimer()
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount <= 0) {
            endQuiz();
        }
    }, 1000);
}


function endQuiz() {

}

function nextQuestion() {
    
}

function showQuestion(quiz) {

}



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

