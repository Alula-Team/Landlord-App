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

  }
}
// ***** END ADD PROPERTIES ***** //


// ***** ADD TRANSACTIONS ***** //
export async function addTransaction() {
  try{
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore(payment, transactionCategory, address, paymentMethod, amount, date);
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

  }
}
// ***** END ADD TRANSACTIONS ***** //


// ***** ADD TENANTS ***** //
export async function addTenant() {
  try{
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore(tenant, address, email, archived, rentDue, rentalRate, securityDeposit, lease);
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

  }
}
// ***** END ADD TENANTS ***** //


// ***** UPDATE PROFILE ***** //
// ***** END UPDATE PROFILE ***** //


// ***** UPDATE PAYMENT INFO ***** //
// ***** END UPDATE PAYMENT INFO ***** //


// ***** Password Reset ***** //
// ***** END Password Reset ***** //


// ***** SIGN OUT ***** //
export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (error) {

  }
}
// ***** ENG SIGN OUT ***** //