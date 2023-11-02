// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCczSwGxYE_kIJkanPLYnx43G9buehsaxo",
  authDomain: "linkedin-clone-only.firebaseapp.com",
  projectId: "linkedin-clone-only",
  storageBucket: "linkedin-clone-only.appspot.com",
  messagingSenderId: "306152191112",
  appId: "1:306152191112:web:dcf9a7db31e4e99fc81b3d",
  measurementId: "G-DB9D2JJZ00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth,app};