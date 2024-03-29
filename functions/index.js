/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.brandNewProperty = functions.firestore
  .document("properties/{propertyId}")
  .onCreate((snapshot) => {
    const allStuffs = snapshot.data();
    console.log(allStuffs);
  });
