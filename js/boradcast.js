
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// Get references to elements
const firebaseConfig = {
  apiKey: "AIzaSyCDN3c_dMyatc0BXV2iuZVC25RtELmBJHc",
  authDomain: "olympic2024payris.firebaseapp.com",
  databaseURL:
    "https://olympic2024payris-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "olympic2024payris",
  storageBucket: "olympic2024payris.appspot.com",
  messagingSenderId: "545409586127",
  appId: "1:545409586127:web:a693efae2aa1a38e34b8ba",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

const videoSection = document.querySelector(".show-content"); // Section containing the iframes
const loginMessage = document.getElementById("loginMessage"); // A message indicating users must log in

// Check authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is logged in, show the video section
    if (videoSection) {
      videoSection.style.display = "block";
    }

    if (loginMessage) {
      loginMessage.style.display = "none"; // Hide the login prompt
    }
  } else {
    // User is not logged in, hide the video section and show a login prompt
    if (videoSection) {
      videoSection.style.display = "none";
    }

    if (loginMessage) {
      loginMessage.style.display = "block";
    }
  }
});
