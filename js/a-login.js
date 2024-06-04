import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, sendEmailVerification, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Handle login form submission
document.getElementById('login').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form refresh
  
    const email = document.getElementById('l-email').value;
    const password = document.getElementById('l-password').value;
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      if (user.emailVerified) {
        // Check if the user is an admin
        const adminRef = ref(database, `admins/${user.uid}`);
        const adminSnap = await get(adminRef);
  
        if (adminSnap.exists() && adminSnap.val().isAdmin) {
          console.log('Admin Logged in!', user.uid);
          alert('Admin Logged in!');
          // Redirect to admin panel
          window.location.href = 'a-panel.html';
        } else {
          console.log('User Logged in!', user.uid);
          alert('User Logged in!');
          // Redirect to user page
          window.location.href = 'index.html';
        }
      } else {
        await sendEmailVerification(user); // Send email verification
        console.log('Verification email sent!');
        alert('Verification email sent! Please check your email inbox.');
  
        // Sign out unverified user to prevent further operations
        await auth.signOut();
      }
    } catch (error) {
      console.error('Error signing in:', error);
  
      // Handle common authentication errors
      const errorCode = error.code;
      const errorMessage = error.message;
  
      if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
        alert('Invalid email or password. Please try again.');
      } else {
        alert(`Error signing in: ${errorMessage}`);
      }
    }
  });
