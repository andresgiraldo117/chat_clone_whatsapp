//importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js');
//importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyAGBGXpXKp52OE23EuF_VNlkqBQ8ZKxDEg",
    authDomain: "whatsappy-app-86b8b.firebaseapp.com",
    projectId: "whatsappy-app-86b8b",
    storageBucket: "whatsappy-app-86b8b.appspot.com",
    messagingSenderId: "189610905725",
    appId: "1:189610905725:web:f1e0d01368dd69d2b6e114"
  };

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

var href = self.location.origin 

messaging.onBackgroundMessage(payload => {
	const title = payload.data.title;
	const options = payload.data.image ? {
		badge: "icon.png",
		body: payload.data.body,
		icon: payload.data.photoURL,
        image: payload.data.image,
    } : {
        badge: "icon.png",
        body: payload.data.body,
        icon: payload.data.photoURL,
    }
	self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    self.clients.openWindow(href);
})
