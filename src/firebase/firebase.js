import * as firebase from 'firebase';
import "firebase/firestore";

import firebaseConfig from './firebaseConfig';

// Initialize Firebase App
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// ***** SIGN UP ***** //
export async function registration(email, password, username) {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email.trim().toLowerCase(), password);

    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("users")
      .doc(currentUser.uid)
      .set({
        email: currentUser.email,
        username: username,
      });
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode == 'auth/email-already-in-use') {
        alert('Email already exists');
    } else {
        alert(errorMessage);
    }
  }
}
// ***** END SIGN UP ***** //

// ***** SIGN IN *****//
export async function signIn(email, password) {
  try {
   await firebase
      .auth()
      .signInWithEmailAndPassword(email.trim().toLowerCase(), password);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode == 'auth/invalid-email' && 'auth/invalid-password') {
      alert('Email or password is not vaild. Please try again.');
    } else {
        alert(errorMessage);
    }
  }
}
// ***** END SIGN IN *****//

// ***** SIGN OUT ***** //
export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (error) {

  }
}
// ***** ENG SIGN OUT ***** //

// ***** Password Reset ***** //
// ***** END Password Reset ***** //