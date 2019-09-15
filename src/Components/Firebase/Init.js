import firebase from "firebase";

import configeration from './Firebase'

const firebaseApp = firebase.initializeApp({
    // copy and paste your firebase credential here
    apiKey: "AIzaSyC7EF5InsMtdMeYZCSMNQMNI-GwquV8uBk",
    authDomain: "activity-tracker-852cd.firebaseapp.com",
    databaseURL: "https://activity-tracker-852cd.firebaseio.com",
    projectId: "activity-tracker-852cd",
    storageBucket: "activity-tracker-852cd.appspot.com",
    messagingSenderId: "254223657376"

});

const db = firebaseApp.firestore();

export { firebaseApp,db };