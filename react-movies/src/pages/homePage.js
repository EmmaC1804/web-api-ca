import React from "react";
//import { getMovies} from "../api/tmdb-api";
import { getHomeMovies } from "../api/movies-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import Grid from "@mui/material/Grid2";
import { Pagination } from "@mui/material";
import Button from "@mui/material/Button";

const HomePage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getHomeMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
  
    <PageTemplate
      title="Discover"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);

};
export default HomePage;