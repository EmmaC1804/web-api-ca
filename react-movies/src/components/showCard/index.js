import React, { useContext  } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
//import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid2";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

export default function ShowCard({show, action}) {

  //const { favorites, addToFavorites } = useContext(MoviesContext);

  //if (favorites.find((id) => id === movie.id)) {
  //  movie.favorite = true;
 // } else {
 //   movie.favorite = false
 // }

  //const handleAddToFavorite = (e) => {
  //  e.preventDefault();
  //  addToFavorites(movie);
 // };

  return (
    <Card>
      <CardHeader
       // avatar={
       //   movie.favorite ? (
         //   <Avatar sx={{ backgroundColor: 'red' }}>
          //    <FavoriteIcon />
          //  </Avatar>
         // ) : null
      //  }
        title={
          <Typography variant="h5" component="p">
            {show.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          show.poster_path
            ? `https://image.tmdb.org/t/p/w500/${show.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid size={{xs: 12}}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {show.first_air_date}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid size={{xs: 12}}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {show.vote_average}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
      
        {action(show)}
      
        <Link to={`/tv/${show.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
        
      </CardActions>
    </Card>
  );
}