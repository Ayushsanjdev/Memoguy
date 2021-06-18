import firebase from 'firebase/app';
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyA5JCxSzE7nA8ptOfgr8S3St16L9MOBDmI",
  authDomain: "keepnotes-abef0.firebaseapp.com",
  projectId: "keepnotes-abef0",
  storageBucket: "keepnotes-abef0.appspot.com",
  messagingSenderId: "63325717370",
  appId: "1:63325717370:web:f6128719adaa1d662f8cc3"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export { db };

export default firebaseConfig;