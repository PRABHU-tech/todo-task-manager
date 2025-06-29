// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGH_UHgg82ZglOO-qAsFrwzrQYmBRioC0",
  authDomain: "todo-app-1515.firebaseapp.com",
  projectId: "todo-app-1515",
  storageBucket: "todo-app-1515.appspot.com",
  messagingSenderId: "1019226137327",
  appId: "1:1019226137327:web:8f8b998066976792d6711a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };
