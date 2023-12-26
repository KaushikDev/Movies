import React from 'react';
import MovieListing from '../../components/movieListing/movieListing';
import SearchMovie from '../../components/searchMovie/searchMovie';

const Home = () => <div>
    <h1>Search and Build Your Own Movies Database</h1>
    <SearchMovie />
    <MovieListing />
</div>

export default Home;