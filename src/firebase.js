// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "chat-react-913d2.firebaseapp.com",
  projectId: "chat-react-913d2",
  storageBucket: "chat-react-913d2.appspot.com",
  messagingSenderId: "557492118940",
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-HPBCPHNWJ8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
