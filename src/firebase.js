import firebase from 'firebase'

console.log('PROCESS.ENV', process.env.FIREBASE_ZLIBPUMP_APIKEY);

const config = {
  apiKey: process.env.FIREBASE_ZLIBPUMP_APIKEY,
  projectId: process.env.FIREBASE_PROJECT_ID,
};
firebase.initializeApp(config);

// Initialize Cloud Functions through Firebase
const functions = firebase.functions();

export default functions;
