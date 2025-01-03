import React from "react";
import Show from "../showCard/";
import Grid from "@mui/material/Grid2";

const ShowList = (props) => {
  let showCards = props.shows.map((s) => (
    <Grid key={s.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
      <Show key={s.id} show={s} action={props.action}/>
    </Grid>
  ));
  return showCards;
};

export default ShowList;