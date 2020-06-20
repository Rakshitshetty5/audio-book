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
        const favourites = []

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                favourites,
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


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
  
    const batch = firestore.batch();
  
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj)
    });
    return await batch.commit() 
  }
  
  export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
      const { genre, books } = doc.data();
  
      return {
        id: doc.id,
        genre,
        books
      };
    });
    //console.log(transformedCollection);
      
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.genre.toLowerCase()] = collection;
      return accumulator
    }, {})
  }





firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;