const admin = require("firebase-admin");

const serviceAccount = require("./comit-saskatoon-react-firebase-adminsdk-3wro6-f189395cd3.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://comit-saskatoon-react.firebaseio.com",
});

function verifyToken(token) {
  return admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      return uid;
    })
    .catch((error) => {
      throw error;
    });
}

function getUserByUid(uid) {
  return admin
    .auth()
    .getUser(uid)
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
      return userRecord;
    })
    .catch((error) => {
      console.log("Error fetching user data:", error);
    });
}

module.exports = {
  verifyToken,
  getUserByUid,
};
