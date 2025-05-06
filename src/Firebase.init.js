// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANjTAzMHFOakfYj5ZyNQX0GZn8Qo85w7Y",
  authDomain: "auth-integration-ff6ac.firebaseapp.com",
  projectId: "auth-integration-ff6ac",
  storageBucket: "auth-integration-ff6ac.firebasestorage.app",
  messagingSenderId: "433501723582",
  appId: "1:433501723582:web:812f931376ad8ce59af7ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);