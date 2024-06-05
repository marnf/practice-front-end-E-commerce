// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1kbe57r8yIgH9asPej7DwWngqlzVAT2c",
  authDomain: "e-commerce-test-9f70a.firebaseapp.com",
  projectId: "e-commerce-test-9f70a",
  storageBucket: "e-commerce-test-9f70a.appspot.com",
  messagingSenderId: "643371371713",
  appId: "1:643371371713:web:18f3d27113bffb2bb69840"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;