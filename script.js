// Open and close login modal
function openLogin() {
    document.getElementById("login-modal").style.display = "block";
}

function closeLogin() {
    document.getElementById("login-modal").style.display = "none";
}

// User login function
function loginUser() {
    let username = document.getElementById("username").value;
    if (username) {
        alert(`Welcome, ${username}!`);
        document.getElementById("user-name").textContent = username;
        closeLogin();
    } else {
        alert("Please enter a username.");
    }
}

// Start a course and show the video section
function startCourse(course) {
    document.getElementById("course-title").textContent = course;
    document.getElementById("video-section").classList.remove("hidden");
}

// Show the quiz section
function showQuiz() {
    document.getElementById("quiz-section").classList.remove("hidden");
}

// Quiz answer check function
function checkAnswer(isCorrect) {
    if (isCorrect) {
        alert("Correct! You passed the quiz.");
        document.getElementById("certificate-section").classList.remove("hidden");
    } else {
        alert("Wrong answer! Try again.");
    }
}

// Certificate download function
function downloadCertificate() {
    alert("Downloading Certificate... 🎉");
}
