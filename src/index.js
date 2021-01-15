import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import "./compiled.css";
import App from './containers/App';
import reportWebVitals from './reportWebVitals';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";



console.log(firebase.apps.length)
var firebaseConfig = {
  apiKey: "AIzaSyCe2NHpPH3QUzFicHemUpw5wrjNe7lJyqk",
  authDomain: "social-media-react-tailwind.firebaseapp.com",
  projectId: "social-media-react-tailwind",
  storageBucket: "social-media-react-tailwind.appspot.com",
  messagingSenderId: "339675504366",
  appId: "0:339675504367:web:9af8ca163749e25260c51a",
  measurementId: "G-JRMZ2RB519"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
console.log(firebase.apps.length)

console.log(firebase.app())


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
