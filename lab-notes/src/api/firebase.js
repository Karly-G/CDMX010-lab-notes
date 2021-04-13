import firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyAUZns8IaKstu9uSBaNGQTftOwzuOh9ius",
    authDomain: "remember-me-6a8aa.firebaseapp.com",
    projectId: "remember-me-6a8aa",
    storageBucket: "remember-me-6a8aa.appspot.com",
    messagingSenderId: "177851296469",
    appId: "1:177851296469:web:9be5eb4e42d7dcccfc905c"
};

// console.log('firebase config', firebaseConfig);

export const firebase_app = firebase.initializeApp(firebaseConfig);