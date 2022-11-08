import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDawtx9SwYfnvy2ps3X2B8c-eamuyWdBkY",
  authDomain: "portfolio-3148f.firebaseapp.com",
  projectId: "portfolio-3148f",
  storageBucket: "portfolio-3148f.appspot.com",
  messagingSenderId: "215549616118",
  appId: "1:215549616118:web:5e9d11a3ff30ffd9de31d7",
  measurementId: "G-XBRLM74BJV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);