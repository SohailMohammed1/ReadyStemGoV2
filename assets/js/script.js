//Get button element and add event listeners
//Creating return Element button, also returns elements as Array which can be iterated
const questions = [
    {
        'question': 'What is the Mitchondria?',
        'option1': 'Powerhouse of the cell',
        'option2': 'Greenhouse of a cell',
        'option3': 'Fire house of a cell',
        'option4': 'Security guard of a cell',
        'answer': 'option1'
    },
    {
        'question': 'What is the purpose of a Battery',
        'option1': 'To power a Lemon',
        'option2': 'To power an Apple',
        'option3': 'To power a Circuit',
        'option4': 'To power a Tomato',
        'answer': 'option3'
    },
    {
        'question': 'What does CAD stand for?',
        'option1': 'Cards and Dices',
        'option2': 'Computer Aided Designs',
        'option3': 'Castles and Damns',
        'option4': 'Celery and Dill',
        'answer': 'option2'
    },
    {
        'question': 'What is the square root of 64?',
        'option1': '2',
        'option2': '8',
        'option3': '5',
        'option4': '7',
        'answer': 'option2'
    },     
    
];

let questionIndex = 0;

function displayScienceQuestion(index) {
    const question = questions[index];
    document.getElementById('question').textContent = question.question;
    document.getElementById('option-1').textContent = question.option1;
    document.getElementById('option-2').textContent = question.option2;
    document.getElementById('option-3').textContent = question.option3;
    document.getElementById('option-4').textContent = question.option4;
}

function checkAnswer(buttonIndex) {
    const answer = questions[questionIndex].answer;
    console.info('Button clicked');
    console.info(buttonIndex);
    console.info('Answer');
    console.info(answer);
    if (answer === buttonIndex){
        console.info('Good');
    }else{
        console.info('Bad');
    }
    questionIndex = questionIndex + 1;
    runGame('science');

}


/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame(gameType) {
    const questionLength = questions.length;
    if (questionIndex < questionLength){
        displayScienceQuestion(questionIndex);
    }
    //Create 2 random numbers between 1 and 25
    // let num1 = Math.floor(Math.random() * 25) + 1;
    // let num2 = Math.floor(Math.random() * 25) + 1;

}

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) { //This code creates an alert box to tell user what they just clicked
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                const buttonIndex = this.getAttribute("data-index");
                checkAnswer(buttonIndex)

            }
        }) 

        
    }
    
    runGame("science");

})





function calculateCorrectAnswer () {

}

function incrementScore() {

}

function incrementWrongAnswers() {

}



function displayTechnologyQuestion() {
 
}

function displayEngineerQuestion() {

}

function displayMathQuestion() {

}