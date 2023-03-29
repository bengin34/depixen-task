// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBW6oN-U0keYArv4dpTf_3pgNBtxlGxC4",
  authDomain: "depixen-a5b8a.firebaseapp.com",
  projectId: "depixen-a5b8a",
  storageBucket: "depixen-a5b8a.appspot.com",
  messagingSenderId: "948568887255",
  appId: "1:948568887255:web:9e5d1f23c6eaf27cbfc592"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)