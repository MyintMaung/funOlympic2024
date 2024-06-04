import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// Initialize Firebase Auth
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
const database = getDatabase(app);
const auth = getAuth(app);

// onAuthStateChanged(auth, (user) => {
//     console.log("Auth state changed", user);
//     const loginBtn = document.getElementById('loginBtn'); // Login button element
//     const profileSection = document.getElementById('profileToggle'); // Profile section
    
//     if (user) {
//         // User is logged in, hide the login button, show the profile
//         if (loginBtn) {
//             loginBtn.style.display = 'none';
//         }
//         if (profileSection) {
//             profileSection.style.display = 'block';
//         }
//     } else {
//         // User is not logged in, show the login button, hide the profile
//         if (loginBtn) {
//             loginBtn.style.display = 'block';
//         }
//         if (profileSection) {
//             profileSection.style.display = 'none';
//         }
//     }
// });

// onAuthStateChanged(auth, (user) => {
//     const loginBtn = document.getElementById('loginBtn');
//     const profileSection = document.getElementById('profileToggle');
    
//     if (user) {
//         if (loginBtn) {
//             loginBtn.style.display = 'none';
//         }
//         if (profileSection) {
//             profileSection.style.display = 'block';
//         }
//     } else {
//         if (loginBtn) {
//             loginBtn.style.display = 'block';
//         }
//         if (profileSection) {
//             profileSection.style.display = 'none';
//         }
//     }
// });

const cachedUserId = localStorage.getItem('userId');

if (cachedUserId) {
    // If there's a cached user ID, assume the user is logged in and adjust the UI accordingly
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('profileToggle').style.display = 'block';
}

// Set up Firebase auth state change listener
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Cache the user's ID
        localStorage.setItem('userId', user.uid);

        // Update the UI to show the profile
        document.getElementById('loginBtn').style.display = 'none';
        document.getElementById('profileToggle').style.display = 'block';

        // Optionally update profile data (e.g., username)
        const userId = user.uid;
        const userRef = ref(database, `users/${userId}/username`);
        onValue(userRef, (snapshot) => {
            const username = snapshot.val();
            if (username) {
                document.getElementById('usernameDisplay').textContent = username;
            }
        });
    } else {
        // Clear the cached user ID
        localStorage.removeItem('userId');

        // Update the UI to show the login button
        document.getElementById('loginBtn').style.display = 'block';
        document.getElementById('profileToggle').style.display = 'none';
    }
});
