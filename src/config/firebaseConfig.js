import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyAPSSS5SkDHkrtezSG7U7rjku9i2wF-eSI",
    authDomain: "mytshirtapp-b8315.firebaseapp.com",
    databaseURL: "https://mytshirtapp-b8315.firebaseio.com",
    projectId: "mytshirtapp-b8315",
    storageBucket: "mytshirtapp-b8315.appspot.com",
    messagingSenderId: "867285888020",
    appId: "1:867285888020:web:026e113801dbce3b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
  storage, firebase as default 
} 