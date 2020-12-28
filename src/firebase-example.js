/*
* This is an example. Fill in your configuration and change the file name into firebase.js
*/

import firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_ZLIBPUMP_APIKEY,
  projectId: '<PROJECT_ID>',
};
firebase.initializeApp(config);

// Initialize Cloud Functions through Firebase
const functions = firebase.functions();

export default functions;
