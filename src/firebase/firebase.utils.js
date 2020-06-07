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

export const createUserProfileDocument = async(userAuth, additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        
        catch(error)
        {
            console.log(error)
        }
    }

    return userRef;


}





firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;