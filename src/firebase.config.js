// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: import.meta.env.VITE_KEY,
  authDomain: "mockbucks.firebaseapp.com",
  projectId: "mockbucks",
  storageBucket: "mockbucks.appspot.com",
  messagingSenderId: "196696354187",
  appId: "1:196696354187:web:7d89ad1d4603a779bdd38e",
  measurementId: "G-WBG6BPPBWG"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore(app);