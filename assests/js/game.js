const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const timerElement = document.querySelector('#timerCount');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
     {
        question: 'What is JavaScript?', 
        choice1: 'programming language',
        choice2: 'JavaScript is the programming language of the Web',
        choice3: 'Computer generated',
        choice4: 'Coffee news',
        answer: 2

    },
    {
        question: 'what is a JavaScript program?', 
        choice1: 'A JavaScript program is a list of programming statements',
        choice2: ' you can fade elements in and out of visibility',
        choice3: 'In HTML, JavaScript code is inserted between <script> and </script> tags.',
        choice4: 'JavaScript is the default scripting language in HTML.',
        answer: 1
 
     },
     {
        question: 'What are Strings in Javascript?', 
        choice1: 'A JavaScript function is a block of JavaScript code, that can be executed when "called" for.',
        choice2: 'function can be called when an event occurs, like when the user clicks a button.',
        choice3: 'Strings are text, written within double or single quotes.',
        choice4: 'A JavaScript function is placed in the <head> section of an HTML page.',
        answer: 3
 
     },
     {
        question: 'what are JavaScript Variables?', 
        choice1: 'To access an HTML element, JavaScript can use the document.getElementById(id) method.',
        choice2: 'Using document.write() after an HTML document is loaded, will delete all existing HTML.',
        choice3: 'The document.write() method should only be used for testing.',
        choice4: 'variables are used to store data values',
        answer: 4
 
     },
    
     {
        question: 'What are JavaScript Variables', 
        choice1: 'In JavaScript, the window object is the global scope object',
        choice2: 'JavaScript variables are containers for storing data values.',
        choice3: 'For debugging purposes, you can call the console.log() method in the browser to display data.',
        choice4: 'used to explain JavaScript code, and to make it more readable.',
        answer: 2
 
     },
    
     {
        question: 'What are JavaScript comments?', 
        choice1: 'JavaScript does not have any print object or print methods.',
        choice2: 'JavaScript comments can be used to explain JavaScript code, and to make it more readable',
        choice3: 'You cannot access output devices from JavaScript.',
        choice4: 'In HTML, JavaScript programs are executed by the web browser.',
        answer: 2
 
     },
    
     {
        question: 'What are JavaScript Data Types?', 
        choice1: 'JavaScript programs (and JavaScript statements) are often called JavaScript code.',
        choice2: 'Semicolons separate JavaScript statements',
        choice3: 'JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.',
        choice4: 'JavaScript variables can hold many data types: numbers, strings, objects and more.',
        answer: 4
 
     },
    
     {
        question: 'What are JavaScript Functions?', 
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: 'JavaScript function is a block of code designed to perform a particular task',
        answer: 4
 
     },
    
     {
        question: 'what is a JavaScript Arrays?', 
        choice1: 'JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.',
        choice2: 'The purpose of code blocks is to define statements to be executed together.',
        choice3: 'JavaScript arrays are used to store multiple values in a single variable',
        choice4: 'JavaScript statements often start with a keyword to identify the JavaScript action to be performed.',
        answer: 3
 
     },
    
     {
        question: 'What are JavaScript Booleans?', 
        choice1: 'JavaScript syntax is the set of rules, how JavaScript programs are constructed.',
        choice2: 'JavaScript uses the var keyword to declare variables.',
        choice3: 'A JavaScript Boolean represents one of two values: true or false.',
        choice4: 'JavaScript uses arithmetic operators ( + - * / ) to compute values.',
        answer: 3
 
     }
     
     
]

let timerInterval;
let timerCount = 60;

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    timerInterval = setInterval(timer, 1000)
    getNewQuestion()
}
timer = () => {
    timerCount--;
    if (timerCount === 0) {
      clearInterval(timerInterval);
      localStorage.setItem("mostRecentScore", score);
      return window.location.assign("./end.html");
    } else {
      timerElement.textContent = timerCount;
    }
  };
  

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        clearInterval(timerInterval);
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('./end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question 

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

availableQuestions.splice(questionsIndex, 1)

acceptingAnswers = true

}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === "correct") {
            incrementScore(SCORE_POINTS)
        } else {
            timerCount = timerCount - 10
        }

        

        selectedChoice.parentElement.classList.add(classToApply)
            
            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply)
                getNewQuestion()

            }, 1000)
    })
})


incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()