const auth = firebase.auth();

function signUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed up:", user);
    })
    .catch((error) => {
      console.error("Error signing up:", error);
    });
}

// Function to sign in a user
function signIn() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed in:", user);
    })
    .catch((error) => {
      console.error("Error signing in:", error);
    });
}

// Function to sign out a user
function signOut() {
  auth.signOut()
    .then(() => {
      console.log("User signed out");
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
}

// Observer for user state changes
auth.onAuthStateChanged((user) => {
  const authContainer = document.getElementById('auth-container');
  const userContainer = document.getElementById('user-container');
  const userEmail = document.getElementById('user-email');

  if (user) {
    // User is signed in
    authContainer.style.display = 'none';
    userContainer.style.display = 'block';
    userEmail.textContent = 'User Email: ' + user.email;
  } else {
    // User is signed out
    authContainer.style.display = 'block';
    userContainer.style.display = 'none';
    userEmail.textContent = '';
  }
});
