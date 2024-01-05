import React, { useContext } from 'react';
import { StoreContext } from '../../common/store/Store';
import MovieListing from '../movieListing/movieListing';

const Favorites = () => {
const {state} = useContext(StoreContext);
const {favorites} = state;


return <MovieListing movies={favorites}   message="You haven't added any movie to your favorites yet!!"/>
}
export default Favorites;