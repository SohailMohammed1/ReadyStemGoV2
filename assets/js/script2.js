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
  }
];

// Initialize the values
let questionIndex = 0;
let score = 0;
let answered = false;

// Function to display relevant question on the page via accessing objects within the questions array
function displayScienceQuestion(index) {
  const question = questions[index];
  document.getElementById('question').textContent = question.question;
  document.getElementById('option-1').textContent = question.option1;
  document.getElementById('option-1').setAttribute('value', 'option1');
  document.getElementById('option-2').textContent = question.option2;
  document.getElementById('option-2').setAttribute('value', 'option2');
  document.getElementById('option-3').textContent = question.option3;
  document.getElementById('option-3').setAttribute('value', 'option3');
  document.getElementById('option-4').textContent = question.option4;
  document.getElementById('option-4').setAttribute('value', 'option4');
}

// Function to check if the user's selection is correct and update the score
// Exit the function if an answer has already been selected
function checkAnswer(buttonIndex, button) {
  if (answered) {
    return; 
  }

  answered = true;

  const answer = questions[questionIndex].answer;
  if (answer === buttonIndex) {
    score++;
    button.classList.add('correct');
  } else {
    button.classList.add('incorrect');
  }

  // Disable all buttons
  const buttons = document.getElementsByClassName('option');
  for (let btn of buttons) {
    btn.disabled = true;
  }

  // Reset class with a delay of 3 seconds/increment index
  setTimeout(() => {
    button.classList.remove('incorrect');
    button.classList.remove('correct');
    questionIndex++;
    runGame('science');
  }, 3000);
}

// Event listeners for the web page's buttons
document.addEventListener('DOMContentLoaded', function () {
  let buttons = document.getElementsByClassName('option');

  function buttonClickHandler(event) {
    const buttonIndex = event.target.getAttribute('value');
    const button = event.target;

    checkAnswer(buttonIndex, button);

    // Disable all buttons
    const buttons = document.getElementsByClassName('option');
    for (let btn of buttons) {
      btn.disabled = true;
    }
  }

  for (let button of buttons) {
    if (button.getAttribute('data-type') === 'submit') {
      button.addEventListener('click', function () {
        alert('You clicked Submit!');
      });
    } else {
      button.addEventListener('click', buttonClickHandler);
    }
  }
});

// Function to reset the game state and display the next question
function runGame(gameType) {
  const questionLength = questions.length;

  if (questionIndex < questionLength) {
    displayScienceQuestion(questionIndex);
    answered = false;

    // Enable all buttons
    const buttons = document.getElementsByClassName('option');
    for (let btn of buttons) {
      btn.disabled = false;
    }
  } else {
    
    
    // Game over
    document.getElementById('quiz').classList.add('hide');
    document.getElementById('score-text').innerHTML = `Game over, your score is ${score}`;
    document.getElementById('home').classList.remove('hide');
    questionIndex = 0;
    score = 0;
  }
}

document.getElementById('show_rules').addEventListener('click', function () {
  document.getElementById('rules').classList.remove('hide');
});

document.getElementById('play').addEventListener('click', function () {
  document.getElementById('rules').classList.add('hide');
  document.getElementById('home').classList.add('hide');
  document.getElementById('quiz').classList.remove('hide');
  runGame('science');
});

