import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAUX0IlyEpQGSNI9Gqstf54en91bHK-58I",
    authDomain: "wedding-card-8140a.firebaseapp.com",
    projectId: "wedding-card-8140a",
    storageBucket: "wedding-card-8140a.appspot.com",
    messagingSenderId: "934083568507",
    appId: "1:934083568507:web:0c4bc38a335032d9e853de",
    measurementId: "G-WWEVNLYK05",
    databaseURL: "https://wedding-card-8140a-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

export default firebase.initializeApp(firebaseConfig);;