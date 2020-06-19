
import {auth}  from '../../firebase/firebase.utils'
import {createUserProfileDocument} from '../../firebase/firebase.utils'
import {firestore} from 'firebase' 

export const addToFavourites = (id, userRef) => {
    const favButton = document.getElementsByClassName("book-info__head-fav")[0];
    auth.onAuthStateChanged(async userAuth => {

        if(userAuth){ 

            const userRef = await createUserProfileDocument(userAuth);
            if(favButton.classList.contains('change-color')){
                favButton.classList.remove('change-color');
                userRef.update({
                    favourites : firestore.FieldValue.arrayRemove(id)
                })
                
        
            }
            else{
                favButton.classList.add('change-color');
                userRef.update({
                    favourites : firestore.FieldValue.arrayUnion(id)
                })
                
            }
        }
    })    
}