// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxn0UCnMeM_inQureRvPfsc_CEFVkS7qE",
  authDomain: "authtodolist-79f4e.firebaseapp.com",
  projectId: "authtodolist-79f4e",
  storageBucket: "authtodolist-79f4e.appspot.com",
  messagingSenderId: "1017675527904",
  appId: "1:1017675527904:web:67dacee940f2d742054285",
  measurementId: "G-5G64XHQ87Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);