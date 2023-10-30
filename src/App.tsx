import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./App.css";
import MyMap from "./components/myMap";
import { Grid } from "@mui/material";
import MyPlaces from "./components/myPlaces";

const App = () => {
  return (
    <Grid container>
      <Grid item xs={9}>
        <MyMap></MyMap>
      </Grid>
      <Grid item xs={3}>
        <MyPlaces></MyPlaces>
      </Grid>
    </Grid>
  );
};

export default App;
