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

    currentUser.sendEmailVerification()
      .then(() => {
        console.log('Verification Email Sent');
      });

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
        navigation.navigate('Login')
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
        navigation.navigate('Login');
    }
  }
}
// ***** END SIGN IN *****//


// ***** PASSWORD RESET ***** //
export async function handlePasswordReset(email) {
  try {
    await firebase
      .auth()
      .sendPasswordResetEmail(email.trim().toLowerCase());
      console.log('Password reset email sent successfully');
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode == 'auth/user-not-found') {
      alert('Email not found. Please sign up instead.');
    } else {
        alert(errorMessage);
    }
  }
}
// ***** END PASSWORD RESET ***** //


// ***** ADD PROPERTIES ***** //
export async function addProperty(address, city, state, zip, unit) {
  try{
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection('properties')
      .doc(currentUser.uid)
      .set({
        address: address,
        city: city,
        state: state,
        zip: zip,
        unit: unit
      });
  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage);
  }
}
// ***** END ADD PROPERTIES ***** //


// ***** ADD TRANSACTIONS ***** //
export async function addTransaction(payment, transactionCategory, address, paymentMethod, amount, date) {
  try{
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection('transactions')
      .doc(currentUser.uid)
      .set({
        payment: payment,
        transactionCategory: transactionCategory,
        address: address,
        paymentMethod: paymentMethod,
        amount: amount,
        date: date
      });
  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage);
  }
}
// ***** END ADD TRANSACTIONS ***** //


// ***** ADD TENANTS ***** //
export async function addTenant(tenant, address, email, archived, rentDue, rentalRate, securityDeposit, lease) {
  try{
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection('tenants')
      .doc(currentUser.uid)
      .set({
        tenant: tenant,
        email: email,
        address: address,
        archived: archived,
        rentDue: rentDue,
        rentalRate: rentalRate,
        securityDeposit: securityDeposit,
        lease: lease
      });
  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage);
  }
}
// ***** END ADD TENANTS ***** //


// ***** NOTIFICATIONS ***** //
// ***** END NOTIFICATIONS ***** //


// ***** UPDATE PROFILE ***** //
export async function updateUsername(username) {
  try {
    const currentUser = firebase.auth().currentUser;

    currentUser.updateProfile({
      username: username
    })
      .then(() => {
        console.log('Username Updated');
      });

    const db = firebase.firestore();
    db.collection("users")
      .doc(currentUser.uid)
      .update({
        username: username,
      });
  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage);
  }
}
// ***** END UPDATE PROFILE ***** //


// ***** UPDATE EMAIL ***** //
export async function updateUserEmail(email, password) {
  try {
    var credential = firebase.auth.EmailAuthProvider.credential(firebase.auth().currentUser.email, password);

    firebase.auth().currentUser.reauthenticateWithCredential(credential)
      .then (() => {
        firebase.auth().currentUser.updateEmail(email.trim().toLowerCase())
          .then(() => {
            console.log('Email Successfully Updated');
            currentUser.sendEmailVerification()
              .then(() => {
                console.log('Verification Email Sent');
              });
          })
      });

    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("users")
      .doc(currentUser.uid)
      .update({
        email: email,
      });

  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage);
  }
}
// ***** END UPDATE EMAIL ***** //


// ***** UPDATE PASSWORD ***** //
export async function updateUserPassword(password, newPassword) {
  try {
    var credential = firebase.auth.EmailAuthProvider.credential(firebase.auth().currentUser.email, password);

    firebase.auth().currentUser.reauthenticateWithCredential(credential)
      .then (() => {
        firebase.auth().currentUser.updatePassword(newPassword)
          .then(() => {
            console.log('Password Updated');
          }) 
          .catch((error) => { alert(error); });
      });
    
  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage);
  }
}
// ***** END UPDATE PASSWORD ***** //


// ***** UPDATE PAYMENT INFO ***** //
// ***** END UPDATE PAYMENT INFO ***** //


// ***** SIGN OUT ***** //
export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage);
  }
}
// ***** END SIGN OUT ***** //
