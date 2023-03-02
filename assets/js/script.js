//Array of objects that contain all of the questions, options and 
//correct answers of the quiz

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


//Initialise values 

let questionIndex = 0;
let score = 0;

//Function displays relevant question on the page via accessing objects within the questions array

function displayScienceQuestion(index) {
    const question = questions[index];
    document.getElementById('question').textContent = question.question;
    document.getElementById('option-1').textContent = question.option1;
    document.getElementById('option-2').textContent = question.option2;
    document.getElementById('option-3').textContent = question.option3;
    document.getElementById('option-4').textContent = question.option4;
}

//Checks if users selection is correct and adds to score total
function checkAnswer(buttonIndex, button) {
    const answer = questions[questionIndex].answer;
    console.info(answer);
    if (answer === buttonIndex){
        score = score + 1;
        
        button.classList.add('correct');
        console.info('Good');
    }else{
        button.classList.add('incorrect');
        console.info('Bad');
    }
    questionIndex = questionIndex + 1;
    setTimeout(() => {
        button.classList.remove('incorrect');
        button.classList.remove('correct');
        runGame('science');
    }, 1000);
    

}


/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

//Main loop, starts when script is first loaded and once users selected answer has been processed
//Else loop displays users score and resets index and variables after quiz is completed

function runGame(gameType) {
    const questionLength = questions.length;
    if (questionIndex < questionLength){
        displayScienceQuestion(questionIndex);
    } 
    else{
        document.getElementById('quiz').classList.add('hide');
        document.getElementById('score-text').innerHTML = `Game over, your score is ${score}`;
        document.getElementById('home').classList.remove('hide');
        questionIndex = 0;
        score = 0;
    }
    

}

//Event listeners for the web pages buttons

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByClassName("option");
    
    for (let button of buttons) { 
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                const buttonIndex = this.getAttribute("value");
                checkAnswer(buttonIndex, this);

            }
        }) 

        
    }
    

    document.getElementById('show_rules').addEventListener('click', function(){
        document.getElementById('rules').classList.remove('hide');
    });
    document.getElementById('play').addEventListener('click', function(){
        document.getElementById('rules').classList.add('hide');
        document.getElementById('home').classList.add('hide');
        document.getElementById('quiz').classList.remove('hide');
        runGame("science");
    });

})





