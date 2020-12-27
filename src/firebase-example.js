/*
* This is an example. Fill in your configuration and change the file name into firebase.js
*/

const firebase = require('firebase');
require('firebase/functions');

const config = {
  apiKey: 'YOUR-API-KEY',
  authDomain: 'YOUR-FIREBASE-DOMAIN',
  databaseURL: 'YOUR-DATABASE-URL',
  projectId: 'YOUR-PROJECT-ID',
  storageBucket: 'YOUR-STORAGE-BUCKET',
  messagingSenderId: 'YOUR-MESSAGING-SENDER-ID',
};
firebase.initializeApp(config);

// Initialize Cloud Functions through Firebase
const functions = firebase.functions();

export default functions;
