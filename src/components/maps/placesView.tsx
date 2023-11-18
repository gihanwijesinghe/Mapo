import { Grid } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import MapoAutoComplete from "../controls/mapoAutoComplete";
import PlacesList from "./placesList";
import { addGoogleLocation } from "../../store/actions/googlePlacesActions";

const PlacesView: React.FC = () => {
  const dispatch: ThunkDispatch<any, any, any> = useDispatch();
  const onAddressSelect = (selection: any) => {
    dispatch(addGoogleLocation(selection.description));
  };
  return (
    <Grid container direction={"column"} style={{ padding: 10 }} spacing={2}>
      <Grid item>
        <MapoAutoComplete lable="Seach for place" onItemSelect={onAddressSelect}></MapoAutoComplete>
      </Grid>
      <Grid item style={{ paddingTop: 100 }}>
        <PlacesList />
      </Grid>
    </Grid>
  );
};

export default PlacesView;
