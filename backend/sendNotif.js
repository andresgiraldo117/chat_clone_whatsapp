const admin = require("firebase-admin");
const firebase = require("firebase");
const serviceAccount = require("./whatsappy-app-86b8b-firebase-adminsdk-1eupf-35f5657f14.json");

/*this code is for testing purposes only*/

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://firebase-adminsdk-1eupf@whatsappy-app-86b8b.iam.gserviceaccount.com"
});

const db = admin.firestore();

console.log("adding the notif to cloud firestore");
db.collection("notifications2").add({
    userID: "0zs2BiVOISfMCE7mP0fT8zPiit53",
    title: "hacker bando",
    body: "wesh ya na9ch",
    photoURL: "https:/w/s96-c/photo.jpg",
    href: "http://localhost:3000/",
    token: "use your token here",
}).then(() => {
	console.log("notif added")
}).catch(e => console.log(e));
