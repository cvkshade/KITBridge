
const quizQuest = document.getElementById('quiz');
const choices = Array.from(document.getElementsByClassName('choice'));

let currentAnswer ={};
let acceptAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
// Question Array

let questions = [
    {
        question:"What is JavaScript?",
        choice1: "Is a networking node",
        choice2: "is a programmng language used to add interactivities to webpages",
        choice3: "is a cloud library.",
        choice4: "is a Java library.",
        answer: 2
    },
    {
        question:"What is a string JavaScript?",
        choice1: "Construct",
        choice2: "Data Type",
        choice3: "Logical Operator",
        choice4: "New JavaScript mechanism",
        answer: 2
    },
    {
        question: "Who created JavaScript",
        choice1: "Linus Torvalds",
        choice2: "Douglas Crockford",
        choice3: "Brendan Eich",
        choice4: "Nathan Tangaye",
        answer: 3
    },
    {
        question: "In what year was let and const introduced?",
        choice1: "1822",
        choice2: "1999",
        choice3: "1995",
        choice4: "2015",
        answer: 4
    }
];

// Scores

const correct_points = 10;
const max_questions = 4;

startquiz = () => {
    
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= max_questions){
        //Go to quiz end page 

        return window.location.assign("/end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    quizQuest.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]
    });
    availableQuestions.splice(questionIndex,1);
    acceptAnswer = true;
};
choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        if(!acceptAnswer) return;

        acceptAnswer = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

       // Class to apply if right or wrong

        let classToApply = 'incorrect';
        if(selectedAnswer == currentQuestion.answer){
            classToApply = 'correct';

        }

        // const classToApply = selectedAnswer == currentAnswer.answer ? "correct" : "incorrect";
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
        console.log(classToApply);

    });
});
startquiz();