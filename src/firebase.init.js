// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkmFtFcEs_LeA1duAdTCR5-pr_D4dYTnI",
  authDomain: "arif-islam-26274.firebaseapp.com",
  projectId: "arif-islam-26274",
  storageBucket: "arif-islam-26274.appspot.com",
  messagingSenderId: "1005792070298",
  appId: "1:1005792070298:web:3d39778f707599c621ed23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;