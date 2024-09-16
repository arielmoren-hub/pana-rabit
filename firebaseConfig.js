// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB1sZ10og8xc4u1JR8q7t57ZSH09vmoYj4",
  authDomain: "biblioteca-fcal-uner.firebaseapp.com",
  databaseURL: "https://biblioteca-fcal-uner-default-rtdb.firebaseio.com",
  projectId: "biblioteca-fcal-uner",
  storageBucket: "biblioteca-fcal-uner.appspot.com",
  messagingSenderId: "299793763723",
  appId: "1:299793763723:web:7e6bec2a9581a90b65b38e",
  measurementId: "G-PJ5YPE2KW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Inicializa servicios de Firebase
const db = getFirestore(app);
export default { app , db, auth};