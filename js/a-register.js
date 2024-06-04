import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// Firebase configuration
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

document.getElementById('signup').addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent page refresh

  // Collect the registration form data
  const email = document.getElementById('r-email').value;
  const password = document.getElementById('r-password').value;
  const username = document.getElementById('r-username').value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (user) {
      // Update Firebase Realtime Database with admin-specific fields
      await update(ref(database, 'admins/' + user.uid), {
        username,
        email,
        isAdmin: true // Mark this user as an admin
      });

      alert('Admin registered successfully! You can now log in.');
      window.location.href = '../a-login.html'; // Redirect to admin login page
    }
  } catch (error) {
    console.error('Error registering:', error);
    alert('Error registering: ' + error.message);
  }
});
