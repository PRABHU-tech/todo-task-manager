// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGH_UHgg82ZglOO-qAsFrwzrQYmBRioC0",
  authDomain: "todo-app-1515.firebaseapp.com",
  projectId: "todo-app-1515",
  storageBucket: "todo-app-1515.appspot.com", // ✅ fixed here
  messagingSenderId: "1019226137327",
  appId: "1:1019226137327:web:8f8b998066976792d6711a",
  measurementId: "G-576DWG7RLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Auth setup
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
