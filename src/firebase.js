import firebase from 'firebase/app';
import 'firebase/functions';

const config = {
  apiKey: process.env.FIREBASE_ZLIBPUMP_APIKEY,
  authDomain: "zlibpump.firebaseapp.com",
  databaseURL: "https://zlibpump.firebaseio.com",
  projectId: "zlibpump",
  storageBucket: "zlibpump.appspot.com",
  messagingSenderId: "752504884231",
  appId: "1:752504884231:web:fa6cc6112d6716007aeea2",
  measurementId: "G-NT2R1EC51T"
};

firebase.initializeApp(config);

// Initialize Cloud Functions through Firebase
const functions = firebase.functions();

export default functions;
