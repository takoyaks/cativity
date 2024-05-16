// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBDwJs23VwgMzHa4MNW8BQrvcrDMschcU4",
    authDomain: "catvity-dict.firebaseapp.com",
    projectId: "catvity-dict",
    storageBucket: "catvity-dict.appspot.com",
    messagingSenderId: "587005239899",
    appId: "1:587005239899:web:b9ab8c828921413333557e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
