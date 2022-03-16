// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB0bHWr-kIsFrmRLZ1sRv1Af0Fgifdl_Y",
  authDomain: "five-barber-a9150.firebaseapp.com",
  projectId: "five-barber-a9150",
  storageBucket: "five-barber-a9150.appspot.com",
  messagingSenderId: "629427700790",
  appId: "1:629427700790:web:dc506582ffc67941c88497"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app);