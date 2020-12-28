import firebase from 'firebase'

console.log('INOUT_APIKEY', process.env.INPUT_FIREBASE_ZLIBPUMP_APIKEY);
console.log('APIKEY', process.env.FIREBASE_ZLIBPUMP_APIKEY);
console.log('PROJECTID', process.env.FIREBASE_PROJECT_ID);
console.log('channels', process.env.FIREBASE_CLI_PREVIEWS)


const config = {
  apiKey: process.env.FIREBASE_ZLIBPUMP_APIKEY,
  projectId: process.env.FIREBASE_PROJECT_ID,
};
firebase.initializeApp(config);

// Initialize Cloud Functions through Firebase
const functions = firebase.functions();

export default functions;
