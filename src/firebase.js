import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // <--- 1. Import Auth

const firebaseConfig = {
  apiKey: "AIzaSyDadnc4tWHRQhfMFPdf5ixGv3qIHbXmnnI",
  authDomain: "sinulog-1cd33.firebaseapp.com",
  projectId: "sinulog-1cd33",
  storageBucket: "sinulog-1cd33.firebasestorage.app",
  messagingSenderId: "266633349936",
  appId: "1:266633349936:web:2beebed4b121196a82d6f5",
  measurementId: "G-Z8Z9B8ZEJM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // <--- 2. Initialize Auth

export { db, auth }; // <--- 3. Export Auth