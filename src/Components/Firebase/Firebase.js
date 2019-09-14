import app from 'firebase/app';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDiAX_7FUgHB14i5pbAf-BkcAQR_f5n3YA",
    authDomain: "savy-29225.firebaseapp.com",
    databaseURL: "https://savy-29225.firebaseio.com",
    projectId: "savy-29225",
    storageBucket: "savy-29225.appspot.com",
    messagingSenderId: "821281703539"
    //appId: "1:821281703539:web:1cd6b334de82c44e"
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }
    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;