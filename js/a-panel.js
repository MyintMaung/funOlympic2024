// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase, ref, onValue, update } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// Initialize Firebase
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

// Function to fetch and display total user count
function fetchTotalUsers() {
  const usersRef = ref(database, '/users'); // Adjust path to your users' data
  onValue(usersRef, (snapshot) => {
    const users = snapshot.val();
    const totalUsers = Object.keys(users).length;
    document.querySelector('.dash-tu span').textContent = totalUsers;
  });
}

// Check if user is authenticated
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, fetch total users
    fetchTotalUsers();
  } else {
    // No user is signed in.
    console.log("No user signed in.");
  }
});


document.addEventListener('DOMContentLoaded', function () {
    const database = getDatabase(app);

    // Function to fetch and display user data in the table
    function displayUserData() {
        const usersRef = ref(database, '/users'); // Adjust path to your users' data
        onValue(usersRef, (snapshot) => {
            const users = snapshot.val();
            const userTableBody = document.getElementById('user-table-body');
            userTableBody.innerHTML = ''; // Clear previous data before appending new data
            for (const userId in users) {
                const user = users[userId];
                const row = `
                    <tr id="user-${userId}">
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                        <td>${user.phone}</td>
                        <td>${user.country}</td>
                        <td>${user.sports}</td>
                    </tr>
                `;
                userTableBody.innerHTML += row; // Append row to the table body
            }
        });
    }

    // Call the function to initially display user data
    displayUserData();

    // Event listener for save button click
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('save-btn')) {
            const userId = event.target.getAttribute('data-user-id');
            const userRef = ref(database, `/users/${userId}`);
            const username = document.getElementById(`user-${userId}`).querySelector('.username').value;
            const email = document.getElementById(`user-${userId}`).querySelector('.email').value;
            const phone = document.getElementById(`user-${userId}`).querySelector('.phone').value;
            const country = document.getElementById(`user-${userId}`).querySelector('.country').value;
            const sports = document.getElementById(`user-${userId}`).querySelector('.sports').value;

            update(userRef, {
                username: username,
                email: email,
                phone: phone,
                country: country,
                sports: sports
            }).then(() => {
                console.log('User data updated successfully!');
            }).catch((error) => {
                console.error('Error updating user data:', error);
            });
        }
    });
});


