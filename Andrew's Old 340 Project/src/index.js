import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from "./data.json";
import popular from "./popular.json";
import {BrowserRouter} from 'react-router-dom';

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD32UfkDnJXb5k-YKCw5B6ih7fDpD_Mw9U",
  authDomain: "subscriptr.firebaseapp.com",
  databaseURL: "https://subscriptr-default-rtdb.firebaseio.com",
  projectId: "subscriptr",
  storageBucket: "subscriptr.appspot.com",
  messagingSenderId: "238715661404",
  appId: "1:238715661404:web:175cfefff2b86ed0914a99",
  measurementId: "G-2W8VE16K24"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter><App data={data} popular={popular}/></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);