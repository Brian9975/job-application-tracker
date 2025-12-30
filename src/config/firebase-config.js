// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6asFGtyi-JL7qbAK-ujSSIwfZ28_ce4g",
  authDomain: "job-application-tracking-53e02.firebaseapp.com",
  projectId: "job-application-tracking-53e02",
  storageBucket: "job-application-tracking-53e02.firebasestorage.app",
  messagingSenderId: "390189911550",
  appId: "1:390189911550:web:b59883b9ccdfa8821604af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
console.log(provider)