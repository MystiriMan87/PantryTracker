// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEGb7DurZ0xw0Lnh96xbtb37QHZX6OS9s",
  authDomain: "pantrytracker-ad845.firebaseapp.com",
  projectId: "pantrytracker-ad845",
  storageBucket: "pantrytracker-ad845.appspot.com",
  messagingSenderId: "792656032224",
  appId: "1:792656032224:web:af356427c0a316bdaabb85",
  measurementId: "G-T4D0G9MBXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
