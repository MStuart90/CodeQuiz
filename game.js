const question = document.querySelector('#question');
// const choices = Array.from(document.querySelectorALL('.choice-text'));
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

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
        answer: 2,

    },
    {
        question: 'what is a JavaScript program?', 
        choice1: 'A JavaScript program is a list of programming statements',
        choice2: ' you can fade elements in and out of visibility',
        choice3: '21',
        choice4: '17',
        answer: 1,
 
     },
     {
        question: 'What are Strings in Javascript?', 
        choice1: '2',
        choice2: '4',
        choice3: 'Strings are text, written within double or single quotes.',
        choice4: '17',
        answer: 3,
 
     },
     {
        question: 'what are JavaScript Variables?', 
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: 'variables are used to store data values',
        answer: 4,
 
     },
    
     {
        question: 'What are JavaScript Variables', 
        choice1: '2',
        choice2: 'JavaScript variables are containers for storing data values.',
        choice3: '21',
        choice4: 'used to explain JavaScript code, and to make it more readable.',
        answer: 2,
 
     },
    
     {
        question: 'What are JavaScript comments?', 
        choice1: '2',
        choice2: 'JavaScript comments can be used to explain JavaScript code, and to make it more readable',
        choice3: '21',
        choice4: '17',
        answer: 2,
 
     },
    
     {
        question: 'What are JavaScript Data Types?', 
        choice1: '2',
        choice2: '4is used to  to automatically resize a website',
        choice3: '21',
        choice4: 'JavaScript variables can hold many data types: numbers, strings, objects and more.',
        answer: 4,
 
     },
    
     {
        question: 'What are JavaScript Functions?', 
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: 'JavaScript function is a block of code designed to perform a particular task',
        answer: 4,
 
     },
    
     {
        question: 'what is a JavaScript Arrays?', 
        choice1: '2',
        choice2: '4',
        choice3: 'JavaScript arrays are used to store multiple values in a single variable',
        choice4: '17',
        answer: 3,
 
     },
    
     {
        question: 'what are JavaScript Booleans?', 
        choice1: '2',
        choice2: '4',
        choice3: 'A JavaScript Boolean represents one of two values: true or false.',
        choice4: '17',
        answer: 3,
 
     }
     
     
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
    progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'

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
        }

        selectedChoice.parentElement.classList.add(classToApply)
            
            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply)
                getNewQuestion()

            }, 1000)
    })
})


incrementScore = num => {
    score +=num
    scoreText.innerText = Score
}

startGame()