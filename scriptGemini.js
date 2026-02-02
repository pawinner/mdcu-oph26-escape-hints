// script.js
function checkAnswer(questionNum, correctValue) {
    const userInput = document.getElementById(`ans${questionNum}`).value.trim().toLowerCase();
    const feedbackElement = document.getElementById(`feedback${questionNum}`);

    if (userInput === correctValue.toLowerCase()) {
        feedbackElement.textContent = "Correct! ✓";
        feedbackElement.className = "feedback correct";
        // Optional: Disable input once correct
        document.getElementById(`ans${questionNum}`).disabled = true;
    } else {
        feedbackElement.textContent = "Incorrect. Try again!";
        feedbackElement.className = "feedback wrong";
    }
}