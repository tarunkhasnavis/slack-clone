import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDXP4utn1oWYq_Ib7bGJNvPbG-aCIyvSMU",
    authDomain: "slack-clone-aa04d.firebaseapp.com",
    projectId: "slack-clone-aa04d",
    storageBucket: "slack-clone-aa04d.appspot.com",
    messagingSenderId: "141183872394",
    appId: "1:141183872394:web:bdde1534e7991ef8fb6c73",
    measurementId: "G-61RDBYVZ66"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db};