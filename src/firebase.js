import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCTkdm5LtjhbENDtCMAjANJEHzusWxaNOY",
    authDomain: "wedding-card-f64e0.firebaseapp.com",
    projectId: "wedding-card-f64e0",
    storageBucket: "wedding-card-f64e0.appspot.com",
    messagingSenderId: "393867876411",
    appId: "1:393867876411:web:4809a2ccb57ee0397aa41e",
    measurementId: "G-GZM7G3GHS2"
};

firebase.initializeApp(firebaseConfig);

  export const googleProvider=new firebase.auth.GoogleAuthProvider();
  export const githubProvider=new firebase.auth.GithubAuthProvider();
  export default firebase;