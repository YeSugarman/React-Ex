// התחברות לאפליקצית פיירבייס

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZUisChC7j7UBKpylllYrxPn_BnX0xnSA",
  authDomain: "test-d8f67.firebaseapp.com",
  projectId: "test-d8f67",
  storageBucket: "test-d8f67.firebasestorage.app",
  messagingSenderId: "312008769520",
  appId: "1:312008769520:web:310ce4dd7d02275c7ce735"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db