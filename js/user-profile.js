import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

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

// Listen for changes in authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    // Retrieve the user's information from the database
    const userId = user.uid;
    const userRef = ref(database, 'users/' + userId);
    onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      if (userData) {
        // Update profile fields with user data
        document.getElementById('profile-username').textContent = userData.username;
        document.getElementById('profile-email').textContent = userData.email;
        document.getElementById('profile-phone').textContent = userData.phone;
        document.getElementById('profile-country').textContent = userData.country;
        document.getElementById('profile-sports').textContent = userData.sports;
      }
    });
  } else {
    // User is signed out
    // Redirect to login page or perform other actions
    window.location.href = "../index.html";
  }
});

// Logout button event listener
const logoutButton = document.getElementById('logout');

if (logoutButton) {
  logoutButton.addEventListener('click', () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert('User logged out');
      })
      .catch((error) => {
        // An error happened.
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });
}


