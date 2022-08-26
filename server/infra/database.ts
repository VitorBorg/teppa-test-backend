import * as admin from "firebase-admin";

var serviceAccount = require("../../firebase_properties.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
