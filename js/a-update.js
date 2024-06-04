
// // Import the functions you need from the SDKs
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// import { getAuth, onAuthStateChanged, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
// import { getDatabase, ref, onValue, update } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// // Initialize Firebase
// const firebaseConfig = {
//         apiKey: "AIzaSyCDN3c_dMyatc0BXV2iuZVC25RtELmBJHc",
//         authDomain: "olympic2024payris.firebaseapp.com",
//         databaseURL: "https://olympic2024payris-default-rtdb.asia-southeast1.firebasedatabase.app",
//         projectId: "olympic2024payris",
//         storageBucket: "olympic2024payris.appspot.com",
//         messagingSenderId: "545409586127",
//         appId: "1:545409586127:web:a693efae2aa1a38e34b8ba"
//       };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const database = getDatabase(app);

// // Function to fetch and display total user count
// function fetchTotalUsers() {
//     const usersRef = ref(database, '/users'); // Adjust path to your users' data
//     onValue(usersRef, (snapshot) => {
//         const users = snapshot.val();
//         const totalUsers = Object.keys(users).length;
//         document.querySelector('.dash-tu span').textContent = totalUsers;
//     });
// }

// // Check if user is authenticated
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         // User is signed in, fetch total users
//         fetchTotalUsers();
//     } else {
//         // No user is signed in.
//         console.log("No user signed in.");
//     }
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const database = getDatabase(app);

//     // Function to fetch and display user data in the table
//     function displayUserData() {
//         const usersRef = ref(database, '/users'); // Adjust path to your users' data
//         onValue(usersRef, (snapshot) => {
//             const users = snapshot.val();
//             const userTableBody = document.getElementById('user-table-body');
//             userTableBody.innerHTML = ''; // Clear previous data before appending new data
//             for (const userId in users) {
//                 const user = users[userId];
//                 const row = `
//                     <tr id="user-${userId}">
//                         <td><input type="text" class="username" value="${user.username}"></td>
//                         <td><input type="email" class="email" value="${user.email}"></td>
//                         <td><input type="text" class="phone" value="${user.phone}"></td>
//                         <td><input type="text" class="country" value="${user.country}"></td>
//                         <td><input type="text" class="sports" value="${user.sports}"></td>
//                         <td><button class="save-btn" data-user-id="${userId}">Save</button></td>
//                         <td><button class="reset-btn" data-user-id="${userId}">Reset</button></td>

//                     </tr>
//                 `;
//                 userTableBody.innerHTML += row; // Append row to the table body
//             }
//         });
//     }

//     // Call the function to initially display user data
//     displayUserData();

//     // Event listener for save button click
//     document.addEventListener('click', function (event) {
//         if (event.target.classList.contains('save-btn')) {
//             const userId = event.target.getAttribute('data-user-id');
//             const userRef = ref(database, `/users/${userId}`);
//             const username = document.getElementById(`user-${userId}`).querySelector('.username').value;
//             const email = document.getElementById(`user-${userId}`).querySelector('.email').value;
//             const phone = document.getElementById(`user-${userId}`).querySelector('.phone').value;
//             const country = document.getElementById(`user-${userId}`).querySelector('.country').value;
//             const sports = document.getElementById(`user-${userId}`).querySelector('.sports').value;
            

//             update(userRef, {
//                 username: username,
//                 email: email,
//                 phone: phone,
//                 country: country,
//                 sports: sports
//             }).then(() => {
//                 console.log('User data updated successfully!');
//             }).catch((error) => {
//                 console.error('Error updating user data:', error);
//             });
//         } else if (event.target.classList.contains('reset-password-btn')) {
//             const userEmail = event.target.getAttribute('data-user-email');
//             sendPasswordResetEmail(auth, userEmail)
//                 .then(() => {
//                     console.log('Password reset email sent successfully!');
//                 })
//                 .catch((error) => {
//                     console.error('Error sending password reset email:', error);
//                 });
//         }
//     });
// });

// // Function to authenticate admin
// // async function authenticateAdmin(email, password) {
// //     try {
// //         await signInWithEmailAndPassword(auth, email, password);
// //         console.log("Admin authenticated successfully!");
// //         // Now you can call other functions that require admin authentication
// //     } catch (error) {
// //         console.error("Error authenticating admin:", error);
// //     }
// // }

// // // Function to update user data and reset password
// // function updateUserDataAndResetPassword(userId, newPassword) {
// //     const userRef = ref(database, `/users/${userId}`);
// //     const username = document.getElementById(`user-${userId}`).querySelector('.username').value;
// //     const email = document.getElementById(`user-${userId}`).querySelector('.email').value;
// //     const phone = document.getElementById(`user-${userId}`).querySelector('.phone').value;
// //     const country = document.getElementById(`user-${userId}`).querySelector('.country').value;
// //     const sports = document.getElementById(`user-${userId}`).querySelector('.sports').value;

// //     // Update user data
// //     update(userRef, {
// //         username: username,
// //         email: email,
// //         phone: phone,
// //         country: country,
// //         sports: sports
// //     }).then(() => {
// //         console.log('User data updated successfully!');
// //         // Reset user's password
// //         auth.sendPasswordResetEmail(email)
// //             .then(() => {
// //                 console.log('Password reset email sent successfully!');
// //             })
// //             .catch((error) => {
// //                 console.error('Error sending password reset email:', error);
// //             });
// //     }).catch((error) => {
// //         console.error('Error updating user data:', error);
// //     });
// // }

// // // Event listener for save button click
// // document.addEventListener('click', function (event) {
// //     if (event.target.classList.contains('save-btn')) {
// //         const userId = event.target.getAttribute('data-user-id');
// //         const newPassword = prompt('Enter new password (leave blank to keep current):');
// //         if (newPassword !== null) {
// //             updateUserDataAndResetPassword(userId, newPassword);
// //         }
// //     }
// // });

// // // Call authenticateAdmin function with admin credentials
// // authenticateAdmin("admin@example.com", "adminpassword");

// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, onAuthStateChanged, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
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
                        <td><input type="text" class="username" value="${user.username}"></td>
                        <td><input type="email" class="email" value="${user.email}"></td>
                        <td><input type="text" class="phone" value="${user.phone}"></td>
                        <td><input type="text" class="country" value="${user.country}"></td>
                        <td><input type="text" class="sports" value="${user.sports}"></td>
                        <td><button class="save-btn" data-user-id="${userId}">Save</button></td>
                        <td><button class="reset-password-btn" data-user-email="${user.email}">Reset</button></td>
                    </tr>
                `;
                userTableBody.innerHTML += row; // Append row to the table body
            }
        });
    }

    // Call the function to initially display user data
    displayUserData();

    // Event listener for save and reset password button click
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
                alert('User data updated successfully!');
            }).catch((error) => {
                console.error('Error updating user data:', error);
                alert('Error updating user data. Please try again.');
            });
        } else if (event.target.classList.contains('reset-password-btn')) {
            const userEmail = event.target.getAttribute('data-user-email');
            sendPasswordResetEmail(auth, userEmail)
                .then(() => {
                    alert('Password reset email sent successfully!');
                })
                .catch((error) => {
                    console.error('Error sending password reset email:', error);
                    alert('Error sending password reset email. Please try again.');
                });
        }
    });
});
