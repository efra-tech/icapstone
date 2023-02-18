import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2MrTzx5IivVBlid7F9sDoXxQzxVgdQdQ",
    authDomain: "info340-forte.firebaseapp.com",
    databaseURL: "https://info340-forte-default-rtdb.firebaseio.com",
    projectId: "info340-forte",
    storageBucket: "info340-forte.appspot.com",
    messagingSenderId: "944774798109",
    appId: "1:944774798109:web:80e84beeb43d268a15dff4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));