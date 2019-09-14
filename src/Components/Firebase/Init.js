import firebase from "firebase";

import configeration from './Firebase'

const firebaseApp = firebase.initializeApp({
    // copy and paste your firebase credential here
    apiKey: "AIzaSyDSvidnt9BGLRXtfMyuQY7yMnyTzeZIDFA",
    authDomain: "kunu-049.firebaseapp.com",
    databaseURL: "https://kunu-049.firebaseio.com",
    projectId: "kunu-049",
    storageBucket: "kunu-049.appspot.com",
    messagingSenderId: "812284848290"

});

const db = firebaseApp.firestore();

export { firebaseApp,db };