/* W3Schools Style Interactive Functions */

// Global Variables
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// Quiz Data
const quizQuestions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language", 
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Management Language"
    ],
    correct: 0
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    answers: ["<link>", "<a>", "<href>", "<url>"],
    correct: 1
  },
  {
    question: "What is the correct HTML element for the largest heading?",
    answers: ["<heading>", "<h6>", "<h1>", "<head>"],
    correct: 2
  },
  {
    question: "Which attribute specifies the URL of a hyperlink?",
    answers: ["src", "link", "href", "url"],
    correct: 2
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    answers: ["<lb>", "<break>", "<br>", "<newline>"],
    correct: 2
  }
];

// Code Examples
const codeExamples = {
  'ex-hello': `<!DOCTYPE html>
<html>
<head>
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first HTML page. Edit this code and see the changes!</p>
</body>
</html>`
};

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  initializePage();
});

function initializePage() {
  // Add fade-in animation to main content
  const mainContent = document.querySelector('.w3-main') || document.body;
  mainContent.classList.add('fade-in');
  
  // Initialize CodeMirror if codeArea exists
  if (document.getElementById('codeArea')) {
    initializeEditor();
  }
  
  // Add smooth scrolling for anchor links
  addSmoothScrolling();
  
  // Initialize mobile menu
  initializeMobileMenu();
}

// Mobile Menu Functions
function initializeMobileMenu() {
  const sidebar = document.getElementById('mySidebar');
  const overlay = document.getElementById('myOverlay');
  
  if (sidebar && overlay) {
    // Add mobile menu button
    if (window.innerWidth <= 992) {
      sidebar.style.display = 'none';
      overlay.style.display = 'none';
    }
  }
}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Code Editor Functions
function initializeEditor() {
  const codeArea = document.getElementById('codeArea');
  if (!codeArea) return;
  
  const editor = CodeMirror.fromTextArea(codeArea, {
    mode: 'text/html',
    lineNumbers: true,
    theme: 'default',
    autofocus: true,
    indentUnit: 2,
    tabSize: 2
  });
  
  editor.on('change', debounce(updatePreview, 300));
  window.htmlEditor = editor;
  
  function updatePreview() {
    const preview = document.getElementById('preview');
    if (!preview) return;
    
    const code = editor.getValue();
    const previewDoc = preview.contentDocument;
    previewDoc.open();
    previewDoc.write(code);
    previewDoc.close();
  }
}

function openEditor(exampleId) {
  const modal = document.getElementById('editorModal');
  const editor = window.htmlEditor;
  
  if (modal && editor) {
    const code = codeExamples[exampleId] || '<h1>Hello World!</h1>';
    editor.setValue(code);
    modal.style.display = 'block';
    updatePreview();
  }
}

function closeEditor() {
  const modal = document.getElementById('editorModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

function tryIt() {
  openEditor('ex-hello');
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function addSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Quiz Functions
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  
  document.getElementById('startQuizBtn').classList.add('w3-hide');
  document.getElementById('resultsContainer').classList.add('w3-hide');
  
  showQuestion();
}

function showQuestion() {
  if (currentQuestionIndex >= quizQuestions.length) {
    showResults();
    return;
  }
  
  const question = quizQuestions[currentQuestionIndex];
  const questionContainer = document.getElementById('questionContainer');
  const nextBtn = document.getElementById('nextBtn');
  const progressBar = document.getElementById('progressBar');
  
  // Update progress
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
  progressBar.style.width = progress + '%';
  progressBar.textContent = Math.round(progress) + '%';
  
  // Show question
  questionContainer.innerHTML = `
    <h3>Question ${currentQuestionIndex + 1} of ${quizQuestions.length}</h3>
    <p class="w3-large">${question.question}</p>
    <div class="w3-margin-top">
      ${question.answers.map((answer, index) => `
        <label class="w3-block w3-padding w3-margin-bottom w3-border w3-round w3-hover-light-grey" style="cursor: pointer;">
          <input type="radio" name="answer" value="${index}" class="w3-radio"> ${answer}
        </label>
      `).join('')}
    </div>
  `;
  
  // Add event listeners to radio buttons
  const radioButtons = questionContainer.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
      nextBtn.classList.remove('w3-hide');
    });
  });
}

function nextQuestion() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (!selectedAnswer) return;
  
  const answerIndex = parseInt(selectedAnswer.value);
  userAnswers[currentQuestionIndex] = answerIndex;
  
  if (answerIndex === quizQuestions[currentQuestionIndex].correct) {
    score++;
  }
  
  currentQuestionIndex++;
  document.getElementById('nextBtn').classList.add('w3-hide');
  showQuestion();
}

function showResults() {
  const percentage = (score / quizQuestions.length) * 100;
  const resultsContainer = document.getElementById('resultsContainer');
  const finalScore = document.getElementById('finalScore');
  const scoreMessage = document.getElementById('scoreMessage');
  const questionContainer = document.getElementById('questionContainer');
  
  questionContainer.style.display = 'none';
  resultsContainer.classList.remove('w3-hide');
  
  finalScore.textContent = `Your Score: ${score}/${quizQuestions.length} (${percentage.toFixed(1)}%)`;
  
  let message = '';
  if (percentage >= 80) {
    message = '🎉 Excellent! You have a great understanding of HTML!';
    resultsContainer.className = resultsContainer.className.replace(/w3-\w+-grey/g, '') + ' w3-pale-green';
  } else if (percentage >= 60) {
    message = '👍 Good job! Keep practicing to improve your HTML skills.';
    resultsContainer.className = resultsContainer.className.replace(/w3-\w+-grey/g, '') + ' w3-pale-yellow';
  } else {
    message = '📚 Keep studying! Review the tutorials and try again.';
    resultsContainer.className = resultsContainer.className.replace(/w3-\w+-grey/g, '') + ' w3-pale-red';
  }
  
  scoreMessage.textContent = message;
}

function restartQuiz() {
  document.getElementById('startQuizBtn').classList.remove('w3-hide');
  document.getElementById('resultsContainer').classList.add('w3-hide');
  document.getElementById('questionContainer').style.display = 'block';
  document.getElementById('progressBar').style.width = '0%';
  document.getElementById('progressBar').textContent = '0%';
  
  const questionContainer = document.getElementById('questionContainer');
  questionContainer.innerHTML = `
    <h3 id="questionText">Ready to start the quiz?</h3>
    <div id="answersContainer" class="w3-margin-top">
      <p>Click the button below to begin!</p>
    </div>
  `;
}

// Exercise Functions
function startExercise(exerciseNumber) {
  const exercises = {
    1: "Create a basic HTML structure with <!DOCTYPE html>, <html>, <head>, and <body> tags.",
    2: "Create a hyperlink using the <a> tag with an href attribute.",
    3: "Add an image using the <img> tag with src and alt attributes.",
    4: "Create a form with input fields and a submit button."
  };
  
  const exerciseCode = {
    1: '<!DOCTYPE html>\n<html>\n<head>\n\t<title>My Page</title>\n</head>\n<body>\n\t<!-- Add your content here -->\n</body>\n</html>',
    2: '<!-- Create a link to Google -->\n<a href="https://www.google.com">Visit Google</a>',
    3: '<!-- Add an image -->\n<img src="image.jpg" alt="Description of image">',
    4: '<!-- Create a simple form -->\n<form>\n\t<label for="name">Name:</label>\n\t<input type="text" id="name" name="name">\n\t<input type="submit" value="Submit">\n</form>'
  };
  
  alert(`Exercise ${exerciseNumber}: ${exercises[exerciseNumber]}\n\nHint: ${exerciseCode[exerciseNumber]}`);
}

// Page Navigation Enhancement
function navigateToPage(page) {
  // Add loading state
  document.body.classList.add('loading');
  
  // Simulate loading time for better UX
  setTimeout(() => {
    window.location.href = page;
  }, 300);
}

// Event Listeners for buttons with data attributes
document.addEventListener('click', function(e) {
  if (e.target.hasAttribute('data-example')) {
    e.preventDefault();
    const exampleId = e.target.getAttribute('data-example');
    openEditor(exampleId);
  }
});

// Window resize handler
window.addEventListener('resize', function() {
  initializeMobileMenu();
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
  // Escape key closes modal
  if (e.key === 'Escape') {
    closeEditor();
  }
  
  // Ctrl+Enter runs code in editor
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    if (window.htmlEditor) {
      updatePreview();
    }
  }
});

console.log('W3Schools Style Tutorial initialized successfully! 🚀');
