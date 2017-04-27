import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App/App';
import Routes from './Routes';
import firebase from 'firebase'

// Initialize Firebase
var config = {

    apiKey: "AIzaSyBh5t0nDsfbB-ANYwUYJcxkqpfSxIrn1kE",
    authDomain: "mar-2017-mahmood.firebaseapp.com",
    databaseURL: "https://mar-2017-mahmood.firebaseio.com",
    projectId: "mar-2017-mahmood",
    storageBucket: "mar-2017-mahmood.appspot.com",
    messagingSenderId: "1006781191897"
  

};
firebase.initializeApp(config);


ReactDOM.render(
  // <App />,
   <Routes />,
  document.getElementById('root')
);
