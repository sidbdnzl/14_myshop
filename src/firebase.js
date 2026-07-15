// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ここに、コンソールでコピーした設定を貼り付ける
const firebaseConfig = {
    apiKey: "AIzaSyAaS7y5UXWafClB2BtRhzcRk7NMUSNHlJk",
    authDomain: "react-ecsite-bd6b1.firebaseapp.com",
    projectId: "react-ecsite-bd6b1",
    storageBucket: "react-ecsite-bd6b1.firebasestorage.app",
    messagingSenderId: "17675102350",
    appId: "1:17675102350:web:ca7ad935be70257d1dc1df"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
