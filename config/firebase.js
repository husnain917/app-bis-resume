// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmUk4q8JuZMECgy38io6Td5ItIh3wsA6A",
  authDomain: "app-bis-resume.firebaseapp.com",
  projectId: "app-bis-resume",
  storageBucket: "app-bis-resume.appspot.com",
  messagingSenderId: "568110847159",
  appId: "1:568110847159:web:1a6371140dafcf5ea36932",
  measurementId: "G-QZVT1L5LXS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
