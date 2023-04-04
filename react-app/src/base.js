// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmJLmMShhBn8u36rIJ7DC_Z8rdkeWF1xQ",
  authDomain: "garden-space-b71fd.firebaseapp.com",
  projectId: "garden-space-b71fd",
  storageBucket: "garden-space-b71fd.appspot.com",
  messagingSenderId: "179439019345",
  appId: "1:179439019345:web:ba84164004550534dd1f70",
  measurementId: "G-9EGKB2RJVC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);