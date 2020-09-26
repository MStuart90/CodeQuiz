const question =document.querySelector('#question');
const choices =Array.from(document.querySelectorALL('.choice-text'));
const progressText =document.querySelector('#progressText');
const scoreText =document.querySelector('#score');
const progressBarFull =document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = truelet score =0
let questionCounter = 0
let availableQuestions = []

let questions = [

    {
       question: 'what is 2 + 2?', 
       choice1: '2',
       choice2: '4',
       choice3: '21',
       choice4: '17',
       answer: 2,

    },
    {
        question: 'what is 2 + 2?', 
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2,
 
     },
     {
        question: 'what is 2 + 2?', 
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2,
 
     },
     {
        question: 'what is 2 + 2?', 
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2,
 
     },
    
     {
        question: 'what is 2 + 2?', 
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2,
 
     },
    
     {
        question: 'what is 2 + 2?', 
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2,
 
     },
    
     {
        question: 'what is 2 + 2?', 
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2,
 
     },
    
     {
        question: 'what is 2 + 2?', 
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2,
 
     },
    
     {
        question: 'what is 2 + 2?', 
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2,
 
     },
    
     {
        question: 'what is 2 + 2?', 
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2,
 
     }
     
     
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = ()=> {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore, score')
        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = 'question ${questionCounter} of ${MAX_QUESTIONS}'
    progressBarFull.getElementsByClassName.width = '${(questionCounter/MAX_QUESTIONS) * 100 }%'

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.inner
}