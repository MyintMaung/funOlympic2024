// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, sendEmailVerification, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
    
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const database = getDatabase(app);
const auth = getAuth(app);

// Initialize Firebase (ensure this part is correct and included)
// import Firebase modules as needed

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const email = document.getElementById('l-email').value;
    const password = document.getElementById('l-password').value;
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      if (user.emailVerified) {
        console.log('User Logged in!', user.uid);
        alert('User Logged in!');
        // Redirect to index.html
        window.location.href = 'index.html';
      } else {
        sendEmailVerification(user)
          .then(() => {
            console.log('Verification email sent!');
            alert('Verification email sent! Please check your email inbox.');
          })
          .catch((error) => {
            console.error('Error sending verification email:', error);
            alert('Error sending verification email: ' + error.message);
          });
      }
    } catch (error) {
      console.log('Error signing in:', error);
  
      const errorCode = error.code;
      const errorMessage = error.message;
  
      console.error(`Error code: ${errorCode}, Message: ${errorMessage}`);
  
      if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
        alert('Invalid email or password. Please try again.');
      } else {
        alert(errorMessage);
      }
    }
  });
  
// document.getElementById('loginForm').addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const email = document.getElementById('l-email').value;
//   const password = document.getElementById('l-password').value;

//   try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       if (user.emailVerified) {
//           // Redirect to index page
//           window.location.href = 'index.html';
//       } else {
//           sendEmailVerification(user)
//               .then(() => {
//                   alert('Verification email sent. Please check your email.');
//               })
//               .catch((error) => {
//                   alert('Error sending verification email: ' + error.message);
//               });
//       }
//   } catch (error) {
//       alert('Error during login: ' + error.message);
//   }
// });
