// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrQsOhN7-C5IWlLpiWdfNxI03oo2PvJPk",
  authDomain: "otp-task-6dd97.firebaseapp.com",
  projectId: "otp-task-6dd97",
  storageBucket: "otp-task-6dd97.appspot.com",
  messagingSenderId: "361109857762",
  appId: "1:361109857762:web:94d002109bcc1be856c5bb",
  measurementId: "G-FN51GLETRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);