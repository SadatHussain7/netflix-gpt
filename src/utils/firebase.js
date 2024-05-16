// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1yOdVgbmnpT-bU2BvySqToWsxHBSaf-g",
  authDomain: "netflixgpt-f4192.firebaseapp.com",
  projectId: "netflixgpt-f4192",
  storageBucket: "netflixgpt-f4192.appspot.com",
  messagingSenderId: "245459386721",
  appId: "1:245459386721:web:1da289d7a07b04f4ecc520",
  measurementId: "G-6WXEXPZ8R1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
