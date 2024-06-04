document.getElementById('profileToggle').addEventListener('click', function() {
  var profileCard = document.getElementById('profileCard');
  // Toggle visibility based on current state
  if (profileCard.style.display === 'none' || profileCard.style.display === '') {
      profileCard.style.display = 'block'; // Show the card
  } else {
      profileCard.style.display = 'none'; // Hide the card
  }
});

  //logout function
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

  

  // // Assuming you want to handle changes in authentication state
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in
  //     // Retrieve the user's username from the database
  //     const userId = user.uid;
  //     const userRef = ref(database, 'users/' + userId + '/username');
  //     onValue(userRef, (snapshot) => {
  //       const username = snapshot.val();
  //       if (username) {
  //         // Update the <h3> element with the username
  //         document.getElementById('usernameDisplay').textContent = username;
  //       }
  //     });
  //   } else {
  //     // User is signed out
  //     // Redirect to login page or perform other actions
  //     window.location.href = "../index.html";
  //   }
  // });
  
  // const logoutButton = document.getElementById('logout');
  
  // if (logoutButton) {
  //   logoutButton.addEventListener('click', () => {
  //     signOut(auth)
  //       .then(() => {
  //         // Sign-out successful.
  //         alert('User logged out');
  //       })
  //       .catch((error) => {
  //         // An error happened.
  //         const errorMessage = error.message;
  //         alert(errorMessage);
  //       });
  //   });
  // }

  onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is logged in:", user.uid);
    } else {
        console.log("No user is logged in.");
    }
});

onAuthStateChanged(auth, (user) => {
  if (user) {
      const userId = user.uid;
      const userRef = ref(database, `users/${userId}/username`);

      onValue(userRef, (snapshot) => {
          const username = snapshot.val();
          console.log("Fetched username:", username); // Debugging

          if (username) {
              document.getElementById('usernameDisplay').textContent = username;
          }
      }, (error) => {
          console.error("Error fetching user data:", error);
      });
  }
});



  document.getElementById('logout').addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            // Logout successful
            alert('Logged out successfully.');
            // Redirect to login page
            window.location.href = '../index.html';
        })
        .catch((error) => {
            alert('Logout failed: ' + error.message);
        });
});

console.log("Auth state changed:", user);
console.log("Firebase initialized successfully");
console.log("Trying to fetch username...");

