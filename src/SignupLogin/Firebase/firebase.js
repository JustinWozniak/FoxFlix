import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAeXIC-o_VTbXB81T0t_zWwDXH1-WHRyjQ",
    authDomain: "react-music-app-6969.firebaseapp.com",
    databaseURL: "https://react-music-app-6969.firebaseio.com",
    projectId: "react-music-app-6969",
    storageBucket: "react-music-app-6969.appspot.com",
    messagingSenderId: "8063284907",
    appId: "1:8063284907:web:00817ef412f06675f3e9ee",
    measurementId: "G-JSBN749SX0"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
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

     // *** User API ***
  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');
}

export default Firebase;