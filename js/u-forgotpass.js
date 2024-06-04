import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase, update, ref } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

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
const auth = getAuth(app);

let forgotPassword = () => {
    const emailInp = document.getElementById("EmailInp");
    sendPasswordResetEmail(auth, emailInp.value)
        .then(() => {
            alert("A password reset link has been sent to your email");
            window.location.href = "../u-login.html";
        })
        .catch((error) => {
            console.error("Error sending password reset email:", error);
        });
}
const resetBtn = document.getElementById("ResetBtn");
resetBtn.addEventListener('click', forgotPassword);