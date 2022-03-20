// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseApp = initializeApp({
    apiKey: "AIzaSyDRldV1EDaj-QKBviGJ57VhkRNgG-kBzTM",
    authDomain: "myproject-62258.firebaseapp.com",
    projectId: "myproject-62258",
    storageBucket: "myproject-62258.appspot.com",
    messagingSenderId: "1069536173675",
    appId: "1:1069536173675:web:7e4f5b2ffa3d4e3fec9b2e",
    measurementId: "G-5G5KL294B0"
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };