import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDuiXYP-Q5AchFX7MF-isb1CgfBEVCHdu0",
    authDomain: "wedding-card-8cb5c.firebaseapp.com",
    projectId: "wedding-card-8cb5c",
    storageBucket: "wedding-card-8cb5c.appspot.com",
    messagingSenderId: "391982557987",
    appId: "1:391982557987:web:af852dd9899161e958ba96",
    measurementId: "G-Q8H7G35GRR"
};

export default firebase.initializeApp(firebaseConfig);;