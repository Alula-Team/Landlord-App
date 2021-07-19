const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello, Pooples!");
});

const createNotification = (notification) => {
  return admin.firestore
    .collection("notifications")
    .add(notification)
    .then((doc) => console.log("Notification added", doc));
};

exports.propertyCreated = functions.firestore
  .document("properties/{propertyId}")
  .onCreate((doc) => {
    const property = doc.data();
    const notification = {
      content: "Added a new property",
      user: property.author,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };

    return createNotification(notification);
  });

exports.notificationCreated = functions.firestore
  .document("notifications/{notificationId}")
  .onCreate(() => {
    const notification = {
      content: "Rent past due",
      time: admin.firestore.FieldValue.serverTimestamp(),
    };
  });
