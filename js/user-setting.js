import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, updateProfile, sendEmailVerification, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

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

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

document.getElementById('updateInfo').addEventListener('click', async (e) => {
  e.preventDefault();
  var email = document.getElementById('email').value;
  var username = document.getElementById('username').value;
  var phone = document.getElementById('phone').value;
  var country = document.getElementById('country').value; 
  var sports = document.getElementById('sports').value; 

  const user = auth.currentUser;

  if (user) {
    // Update user profile
    await updateProfile(user, {
      displayName: username
    }).then(() => {
      // Send email verification
      sendEmailVerification(auth.currentUser).then(() => {
        // Update user information in Realtime Database
        update(ref(database, 'users/' + user.uid), {
          username: username,
          email: email,
          phone: phone,
          country: country,
          sports: sports
        }).then(() => {
          // User information updated successfully
          alert('User information updated successfully! Please verify your new email address.');
          location.reload();
        }).catch((error) => {
          alert('Error updating user information in Realtime Database: ' + error.message);
        });
      }).catch((error) => {
        alert('Error sending email verification: ' + error.message);
      });
    }).catch((error) => {
      alert('Error updating profile: ' + error.message);
    });
  } else {
    alert('User not signed in.');
  }
});

