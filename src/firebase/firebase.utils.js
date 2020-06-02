import firebase from 'firebase/app';


import 'firebase/firebase-firestore';

import 'firebase/auth';


const config =  {
    apiKey: "AIzaSyBijTTL5LZAHa0OL-eQLztRvcSZ2VH18GU",
    authDomain: "audiobookreact.firebaseapp.com",
    databaseURL: "https://audiobookreact.firebaseio.com",
    projectId: "audiobookreact",
    storageBucket: "audiobookreact.appspot.com",
    messagingSenderId: "282825440997",
    appId: "1:282825440997:web:80fdf3ae99f71be521de0c",
    measurementId: "G-GTTZCQMD7P"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;