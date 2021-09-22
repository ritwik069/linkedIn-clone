// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCOxpf4JRcl0eXYUKWIp5DLZfKqxUvEWLk",
    authDomain: "linkedinproject-1e178.firebaseapp.com",
    projectId: "linkedinproject-1e178",
    storageBucket: "linkedinproject-1e178.appspot.com",
    messagingSenderId: "866206481839",
    appId: "1:866206481839:web:f6e3a4ef4461c9329e435a",
    measurementId: "G-QYNKDHMD6F"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth(); 

export {db,auth};