// Function to check the answer
function checkAnswer() {
    const correctAnswer = '4';
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    if (userAnswer === correctAnswer) {
        displayFeedback("Correct! Well done.");
    } else {
        displayFeedback("That's incorrect. Try again!");
    }
}

// Function to display feedback
function displayFeedback(message) {
    const feedbackElement = document.getElementById('feedback');
    if (feedbackElement) {
        feedbackElement.textContent = message;
    }
}

// Add event listener to submit button
const submitButton = document.getElementById('submit-answer');
if (submitButton) {
    submitButton.addEventListener('click', checkAnswer);
}
