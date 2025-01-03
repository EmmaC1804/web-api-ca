import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import ShowList from "../showList";
import Grid from "@mui/material/Grid2";
import { Pagination } from "@mui/material";

function ShowListPageTemplate({ shows, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedShows = shows
  .filter((m) => m && m.name && m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1)
  .filter((m) => genreId > 0 ? m.genre_ids?.includes(genreId) : true);
  
  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if(type === "genre") setGenreFilter(value);
  };

  return (
    <Grid container
    sx={{
      backgroundColor: "rgb(240,238,211)"
    }} 
    >
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}}>
        <Grid 
          key="find" 
          size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} 
          sx={{padding: "20px"}}
        >
        </Grid>
        <ShowList action={action} shows={displayedShows}></ShowList>
      </Grid>
     
    </Grid>
  );
}
export default ShowListPageTemplate;