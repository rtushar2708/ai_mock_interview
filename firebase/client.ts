import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDakQJc7DMmK4l6eFc5c0o8bDEk2XOtCw8",
  authDomain: "mockinterview-9f126.firebaseapp.com",
  projectId: "mockinterview-9f126",
  storageBucket: "mockinterview-9f126.firebasestorage.app",
  messagingSenderId: "555800989304",
  appId: "1:555800989304:web:a1458c3fac836948db278d",
  measurementId: "G-ZTS9QX7C1G"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);