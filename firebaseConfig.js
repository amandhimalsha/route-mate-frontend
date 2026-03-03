import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeW6UBmQCOEkpcP_iLe0SrAERSkLFtvZs",
  authDomain: "routemate-50a8b.firebaseapp.com",
  projectId: "routemate-50a8b",
  storageBucket: "routemate-50a8b.firebasestorage.app",
  messagingSenderId: "965751985114",
  appId: "1:965751985114:web:64d1667dec3b194363e6e3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
