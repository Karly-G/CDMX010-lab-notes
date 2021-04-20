import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyB6Jb8hopHSEIHSb4U-yyXPiuBKDe8_M2E',
    authDomain: 'remember-me-d927f.firebaseapp.com',
    projectId: 'remember-me-d927f',
    storageBucket: 'remember-me-d927f.appspot.com',
    messagingSenderId: '390656546926',
    appId: '1:390656546926:web:92eca780f097f7d45cee7f'
};

// console.log('firebase config', firebaseConfig);

const fb = firebase.initializeApp(firebaseConfig);
const auth = fb.auth();
const db = fb.firestore();

export {auth, db}