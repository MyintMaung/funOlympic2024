function sanitizeInput(input) {
    return input.replace(/</g, "&gt;").replace(/>/g, "&ht;");
}

function ckPasswordStrength() {
    var password = sanitizeInput(document.getElementById("password").value);
    var strengthText = document.getElementById("strength-text");
    var msg = document.getElementById("message");
    var str = document.getElementById("str");
    var feedback = document.getElementById("feedback");
    
    // Define criteria
    var minLength = 8;
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasNumbers = /\d/.test(password);
    var hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Check strength
    var strength = 0;
    if (password.length >= minLength) strength++;
    if (hasUpperCase) strength++;
    if (hasLowerCase) strength++;
    if (hasNumbers) strength++;
    if (hasSpecialChars) strength++;

    // Update strength text
    switch (strength) {
        case 0: case 1:
            strengthText.textContent = "Weak";
            strengthText.style.color = "red";
            feedback.textContent = "Please add numbers or special characters.";
            break;
        case 2: case 3:
            strengthText.textContent = "Moderate";
            strengthText.style.color = "orange";
            feedback.textContent = "Please add uppercase or lowercase characters.";
            break;
        case 4: case 5:
            strengthText.textContent = "Strong";
            strengthText.style.color = "green";
            feedback.textContent = "Perfect!";
            break;

            feedback.style.display = feedback.textContent.trim() !== "" ? "block" : "none";
    }

    // Update message text
    if (password.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }

    // Update strength level text
    if (password.length < 4) {
        str.innerHTML = "Weak";
    } else if (password.length >= 4 && password.length < 8) {
        str.innerHTML = "Medium";
    } else {
        str.innerHTML = "Strong";
    }
}

function ckConfirm() {
    var password = sanitizeInput(document.getElementById("password").value);
    var confirm_password = sanitizeInput(document.getElementById("confirm-password").value);
    var confirmFeedback = document.getElementById("confirm-feedback");

    if (confirm_password.length > 0 && confirm_password !== password) {
        confirmFeedback.textContent = "Passwords do not match.";
        confirmFeedback.style.display = "block";
    } else {
        confirmFeedback.textContent = "";
        confirmFeedback.style.display = "none";
    }
}

// Add input event listeners to trigger the functions
var pass = document.getElementById("password");
var confirmPass = document.getElementById("confirm-password");
pass.addEventListener('input', ckPasswordStrength);
confirmPass.addEventListener('input', ckConfirm);