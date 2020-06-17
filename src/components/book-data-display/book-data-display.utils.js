export const addToFavourites = (id) => {
    const favButton = document.getElementsByClassName("book-info__head-fav")[0];
    if(favButton.classList.contains('change-color')){
        favButton.classList.remove('change-color');

    }
    else{
        favButton.classList.add('change-color');
    }
    console.log(id)
}