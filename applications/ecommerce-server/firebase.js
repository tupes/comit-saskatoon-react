const admin = require("firebase-admin");

var serviceAccount = require("./comit-saskatoon-react-firebase-adminsdk-3wro6-f189395cd3.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://comit-saskatoon-react.firebaseio.com",
});

function verifyToken(token) {
  return admin
    .auth()
    .verifyIdToken(token)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      return uid;
    })
    .catch((error) => {
      throw error;
    });
}

module.exports = {
  verifyToken,
};
