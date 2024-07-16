function checkAnswer() {
    const correctanswer = '4';
    const userAnswer =
    document.querySelector('input[name="quiz"]:checked').value;
    const feedbackElement = document.getElementById('feedback');
    if (userAnswer == correctanswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);

