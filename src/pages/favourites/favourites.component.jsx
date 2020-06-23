import React from 'react';

import FavouritesDisplay from '../../components/favourites-display/favourites-display.component'
import { returnFavourites } from '../../redux/user/user.selector'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const FavouritesDisplayWithSpinner = WithSpinner(FavouritesDisplay);

const FavouritesPage = ({favourites}) => (
    <FavouritesDisplayWithSpinner favourites = {favourites} isLoading = {favourites ? false : true}/>
)

const mapStateToProps = createStructuredSelector({
    favourites : returnFavourites
})


export default connect(mapStateToProps)(FavouritesPage);

