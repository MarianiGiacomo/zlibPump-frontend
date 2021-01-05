import firebase from 'firebase/app';
import 'firebase/functions';

const config = {
  apiKey: process.env.FIREBASE_ZLIBPUMP_APIKEY,
  projectId: 'zlibpump',
};

firebase.initializeApp(config);

// Initialize Cloud Functions through Firebase
const functions = firebase.functions();

export default functions;
