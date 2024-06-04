import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, sendEmailVerification, updatePassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDN3c_dMyatc0BXV2iuZVC25RtELmBJHc",
    authDomain: "olympic2024payris.firebaseapp.com",
    databaseURL: "https://olympic2024payris-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "olympic2024payris",
    storageBucket: "olympic2024payris.appspot.com",
    messagingSenderId: "545409586127",
    appId: "1:545409586127:web:a693efae2aa1a38e34b8ba"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

document.getElementById('signup').addEventListener('click', async (e) => {
  e.preventDefault();

  const newPassword = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (newPassword !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  const user = auth.currentUser;

  if (!user) {
    alert('User not signed in.');
    return;
  }

  // Check if the email is verified
  const isEmailVerified = user.emailVerified;

  try {
    // Update the user's password
    await updatePassword(user, newPassword);

    // If the email is not verified, send a verification email
    if (!isEmailVerified) {
      await sendEmailVerification(user);
      alert('Password updated successfully! A verification email has been sent to your email address. Please check your spam folder if you do not receive it.');
    } else {
      alert('Password updated successfully!');
    }

    // Additional user data update
    await update(ref(database, 'users/' + user.uid), {
      lastPasswordChange: new Date().toISOString(),
    });

    location.reload(); // Refresh the page after update
  } catch (error) {
    alert('Error updating password or sending email verification: ' + error.message);
  }
});
