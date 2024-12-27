// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1pN-KVnPjlMLLDqDy3ii7CWdSInzCZH4",
  authDomain: "ecommerce-beta-f516a.firebaseapp.com",
  projectId: "ecommerce-beta-f516a",
  storageBucket: "ecommerce-beta-f516a.firebasestorage.app",
  messagingSenderId: "599798794500",
  appId: "1:599798794500:web:e0fa9e6ace240b1aa5a851",
  measurementId: "G-4NNMPC48QW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);