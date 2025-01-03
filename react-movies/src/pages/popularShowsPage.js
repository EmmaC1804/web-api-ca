import React from "react";
import { getShows} from "../api/tmdb-api";
import PageTemplate from '../components/templateShowListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import Grid from "@mui/material/Grid2";
import { Pagination } from "@mui/material";
import Button from "@mui/material/Button";

const PopularShowsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('popular', getShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

  const shows = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = shows.filter(s => s.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (showId) => true 

  return (
  
    <PageTemplate
      title="Popular"
      shows={shows}
      action={(show) => {
        return <AddToFavoritesIcon show={show} />
      }}
    />
);

};
export default PopularShowsPage;