import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA5kpbBZq4oHvfCyqzhaurRparKpCie-zc",
    authDomain: "plant-buddy-d0a1f.firebaseapp.com",
    projectId: "plant-buddy-d0a1f",
    storageBucket: "plant-buddy-d0a1f.appspot.com",
    messagingSenderId: "509050482272",
    appId: "1:509050482272:web:a471555ba9abc451041d05"
}

firebase.initializeApp(config)

// set up a provider ... Google, Facebook, Github
const googleProvider = new firebase.auth.GoogleAuthProvider();

// reference to firebase auth
const auth = firebase.auth();


// Set up auth functions
function login() {
    auth.signInWithPopup(googleProvider);
}

function logout() {
    auth.signOut();
}

// Export auth functions

export {
    login,
    logout,
    auth
}