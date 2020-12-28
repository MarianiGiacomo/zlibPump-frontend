import firebase from 'firebase'

console.log('INPUT_APIKEY', process.env.INPUT_FIREBASE_ZLIBPUMP_APIKEY);
console.log('INPUT_PROJECTID', process.env.INPUT_PROJECTID);
console.log('APIKEY', process.env.FIREBASE_ZLIBPUMP_APIKEY);
console.log('PROJECTID', process.env.PROJECT_ID);
console.log('channels', process.env.FIREBASE_CLI_PREVIEWS)
console.log('env variables', process.env);

const config = {
  apiKey: process.env.FIREBASE_ZLIBPUMP_APIKEY,
  projectId: process.env.FIREBASE_PROJECT_ID,
};
firebase.initializeApp(config);

// Initialize Cloud Functions through Firebase
const functions = firebase.functions();

export default functions;
