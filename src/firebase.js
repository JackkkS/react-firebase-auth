// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRsuTdkT_dsTQ4zZqErbKGDQna3lNHByw",
  authDomain: "react-fire-auth-514a2.firebaseapp.com",
  projectId: "react-fire-auth-514a2",
  storageBucket: "react-fire-auth-514a2.appspot.com",
  messagingSenderId: "502975390859",
  appId: "1:502975390859:web:d97127b14655fc48c1a08e",
  measurementId: "G-6W92CDKC4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;