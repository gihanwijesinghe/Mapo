import { Grid } from "@mui/material";
import React from "react";
import MapoMap from "../controls/mapoMap";
import PlacesView from "./placesView";
import {
  MapCenterGeoCordinates,
  MapViewLeftContent,
  MapViewRightContent,
  MapZoomLevel,
} from "../../models/appConstants";
import { MapViewProps } from "../../models/propTypes";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import { GeoCordinates } from "../../models/stateTypes";

const MapView: React.FC<MapViewProps> = (props) => {
  const { leftGridSize, rightGridSize, center, zoom } = props;

  const [markerPosition, setMarkerPosition] = React.useState<GeoCordinates>(center ? center : MapCenterGeoCordinates);

  const onPlaceSelect = (selection: any) => {
    geocodeByAddress(selection.description)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => setMarkerPosition({ lat, lng }));
  };

  return (
    <Grid container>
      <Grid item xs={leftGridSize ? leftGridSize : MapViewLeftContent}>
        <MapoMap
          center={markerPosition}
          zoom={zoom ? zoom : MapZoomLevel}
          markers={[{ position: markerPosition }]}
        ></MapoMap>
      </Grid>
      <Grid item xs={rightGridSize ? rightGridSize : MapViewRightContent}>
        <PlacesView
          searchTitle={"Seach for place"}
          listTitle={"Places list"}
          onPlaceSelect={onPlaceSelect}
        ></PlacesView>
      </Grid>
    </Grid>
  );
};

export default MapView;
