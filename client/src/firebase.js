// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c0677.firebaseapp.com",
  projectId: "mern-estate-c0677",
  storageBucket: "mern-estate-c0677.appspot.com",
  messagingSenderId: "23910828377",
  appId: "1:23910828377:web:06fbf69e722c51a8c62448",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
