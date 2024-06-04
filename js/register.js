// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
    
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

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);


document.getElementById('signup').addEventListener('click', async (e) => {
  e.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var username = document.getElementById('username').value;
  var phone = document.getElementById('phone').value;
  var country = document.getElementById('country').value; 
  var sports = document.getElementById('sports').value; 

  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          if (user) {
              // Update the lastLogin field
              update(ref(database, 'users/' + user.uid), {
                  
                  username: username,
                  email: email,
                  phone: phone,
                  country: country,
                  sports: sports,
                  password: password
              }).then(() => {
                  // User registration successful
                  alert('User created and data saved!');
                  location.reload();
              }).catch((databaseError) => {
                  alert('Error saving data: ' + databaseError.message);
              });
          } else {
              alert('User creation failed. The account may already exist.');
              resetForm();
          }
      })
      .catch((authError) => {
          alert('Error creating user: ' + authError.message);
      });
});

function resetForm() {
  // Reset the form fields
  document.getElementById('username').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('password').value = '';  
  document.getElementById('confirm-password').value = '';
  document.getElementById('user-input').value = '';

  // Refresh the captcha
  refreshCaptcha();
}
