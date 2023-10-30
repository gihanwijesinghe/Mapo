import { Grid } from "@mui/material";
import React from "react";

const MyPlaces: React.FC = () => {
  return (
    <Grid container direction={"column"}>
      <Grid item>search</Grid>
      <Grid item>search results</Grid>
    </Grid>
  );
};

export default MyPlaces;
