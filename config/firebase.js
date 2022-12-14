// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-rlc0IIqKp2RWPA_K36JoEbQbXk5p1S8",
  authDomain: "bisresume.firebaseapp.com",
  projectId: "bisresume",
  storageBucket: "bisresume.appspot.com",
  messagingSenderId: "699077904738",
  appId: "1:699077904738:web:a852bd493fbe7fe690043b",
  measurementId: "G-8SYDF2094P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
