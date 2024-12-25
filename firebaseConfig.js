// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase Config
export const firebaseConfig = {
  apiKey: 
  authDomain: 
  projectId:
  storageBucket: 
  messagingSenderId: 
  appId:
  measurementId:
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Firebase Auth
const provider = new GoogleAuthProvider(); // Google Auth Provider
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, db, storage };

export const initializeFirebase = () => {
  return app;
};
