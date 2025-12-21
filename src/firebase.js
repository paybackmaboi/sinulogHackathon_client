// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDadnc4tWHRQhfMFPdf5ixGv3qIHbXmnnI",
  authDomain: "sinulog-1cd33.firebaseapp.com",
  projectId: "sinulog-1cd33",
  storageBucket: "sinulog-1cd33.firebasestorage.app",
  messagingSenderId: "266633349936",
  appId: "1:266633349936:web:2beebed4b121196a82d6f5",
  measurementId: "G-Z8Z9B8ZEJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const analytics = getAnalytics(app);

export { db };