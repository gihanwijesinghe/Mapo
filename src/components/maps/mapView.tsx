import { Grid } from "@mui/material";
import React from "react";
import MapoMap from "../controls/mapoMap";
import MyPlaces from "./placesView";
import { MapViewLeftContent, MapViewRightContent } from "../../models/appConstants";
import { MapViewProps } from "../../models/propTypes";

const MapView: React.FC<MapViewProps> = (props) => {
  const { leftGridSize, rightGridSize } = props;
  return (
    <Grid container>
      <Grid item xs={leftGridSize ? leftGridSize : MapViewLeftContent}>
        <MapoMap></MapoMap>
      </Grid>
      <Grid item xs={rightGridSize ? rightGridSize : MapViewRightContent}>
        <MyPlaces></MyPlaces>
      </Grid>
    </Grid>
  );
};

export default MapView;
