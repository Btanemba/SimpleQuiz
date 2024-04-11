const questions  = [
{
    question: "What is my Full Name?",
    answers: [
        {text: " Anemba Benedict Torhile Shapela", correct: true},
        {text: " Anemba Benedict", correct: false},
        {text: " Anemba Benedict Shapela", correct: false},
        {text: " Anemba Benedict Torhile ", correct: false},
    ]
},
{
    question: "Which Country Was I Born in?",
    answers: [
        {text: " Nigeria", correct: true},
        {text: " Gambia", correct: false},
        {text: " Liberia", correct: false},
        {text: " Ghana", correct: false},
    ]
},
{
    question: "What is my Relationship Status?",
    answers: [
        {text: " Taken", correct: true},
        {text: " Single", correct: false},
        {text: " Married", correct: false},
        {text: " I have no idea", correct: false},
    ]
},
{
    question: "In which of following Country did I spend 10years only?",
    answers: [
        {text: " Liberia", correct: false},
        {text: " Gambia", correct: true},
        {text: " Nigeria", correct: false},
        {text: " Austria", correct: false},
    ]
},
{
    question: "Which University is Benedict Anemba doing his Masters?",
    answers: [
        {text: " AAU", correct: false},
        {text: " CAUS", correct: true},
        {text: " University of Salzburg", correct: false},
        {text: " University of Vienna", correct: false},
    ]
},
{
    question: "What gives me Headache?",
    answers: [
        {text: " Lack of Sleep", correct: false},
        {text: " Hunger", correct: true},
        {text: " Stress", correct: false},
        {text: " Overthinking", correct: false},
    ]
},
{
    question: "What can't I do?",
    answers: [
        {text: " Drive", correct: false},
        {text: " Swim", correct: true},
        {text: " Cook", correct: false},
        {text: " Cycle", correct: false},
    ]
},
{
    question: "Which is the Right Order in which I believe?",
    answers: [
        {text: " Friends-Love- Relationship", correct: true},
        {text: " Love-Relationship", correct: false},
        {text: " Love", correct: false},
        {text: " Relation", correct: false},
    ]
},
{
    question: "Who do I talk about the Most?",
    answers: [
        {text: " My Mum", correct: true},
        {text: " My Dad", correct: false},
        {text: " My Sister", correct: false},
        {text: " My Girlfried", correct: false},
    ]
},
{
    question: "Movies I hate Watching?",
    answers: [
        {text: "Emotional Movies", correct: true},
        {text: "Horror ", correct: false},
        {text: " Action", correct: false},
        {text: " Comdey", correct: false},
    ]
},
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML= "Next";
    showQuestion();
}

function showQuestion()
{
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState()
{
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.corect === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display ="block";
}

function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else
    {
        showScore();
    }
}

nextButton.addEventListener("click",()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();

    }else{
        startQuiz();
    }
});
 startQuiz();

