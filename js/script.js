
// // Initial letter spacing
// var initialLetterSpacing = 21;

// function refreshCaptcha() {
//   // Implement logic to generate a new captcha text and update the UI
//   var newCaptchaText = generateCaptchaText();
//   var captchaTextElement = document.getElementById('captcha-text');
  
//   // Check if the element exists
//   if (captchaTextElement) {
//       captchaTextElement.innerText = newCaptchaText;
//       captchaTextElement.style.letterSpacing = initialLetterSpacing + 'px';
//   } else {
//       console.error('Element with ID "captcha-text" not found.');
//   }
// }

// function checkCaptcha() {
//   // Retrieve user input and captcha text
//   var userInput = document.getElementById('user-input').value;
//   var captchaText = document.getElementById('captcha-text').innerText;

//   // Check if the user input matches the captcha text
//   if (userInput.toUpperCase() === captchaText.toUpperCase()) {
//       alert('Captcha is correct!');
//   } else {
//       alert('Incorrect captcha. Please try again.');
//       refreshCaptcha();
//   }
//   return false;
// }


// function generateCaptchaText() {
//   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//   var captchaText = '';
//   for (var i = 0; i < 8; i++) {
//       var randomIndex = Math.floor(Math.random() * characters.length);
//       captchaText += characters.charAt(randomIndex);
//   }
//   return captchaText;
// }

// // Initial captcha generation
// refreshCaptcha();

function handleLoginError(error) {
  console.error('Error signing in:', error);

  const errorCode = error.code;
  const errorMessage = error.message;

  console.error(`Error code: ${errorCode}, Message: ${errorMessage}`);

  if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
      alert('Invalid email or password. Please try again.');
  } else {
      alert(errorMessage);
  }
}

function updateCountdown() {
  // Set the event date (Olympic start date: July 26, 2024)
  const eventDate = new Date("2024-07-26T00:00:00Z").getTime();

  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update the countdown elements
  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

  // Repeat the countdown every second
  setTimeout(updateCountdown, 1000);
}

// Initialize the countdown
updateCountdown();


//------------------------------------------------------

const marquee = document.getElementById("marquee");

  // Function to reset the position for a continuous loop
  marquee.addEventListener("animationiteration", () => {
      marquee.style.transform = "translateX(0)"; // Reset the position after animation ends
  });









