import { Grid } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import MapoAutoComplete from "../controls/mapoAutoComplete";
import PlacesList from "./placesList";
import { addGoogleLocation } from "../../store/actions/googlePlacesActions";
import { PlacesViewProps } from "../../models/propTypes";

const PlacesView: React.FC<PlacesViewProps> = (props) => {
  const { onPlaceSelect, searchTitle, listTitle } = props;

  const dispatch: ThunkDispatch<any, any, any> = useDispatch();

  const onAddressSelect = (selection: any) => {
    dispatch(addGoogleLocation(selection.description));
    onPlaceSelect && onPlaceSelect(selection);
  };

  return (
    <Grid container direction={"column"} style={{ padding: 10 }} spacing={2}>
      <Grid item>
        <MapoAutoComplete
          lable={searchTitle ? searchTitle : "Seach for place"}
          onItemSelect={onAddressSelect}
        ></MapoAutoComplete>
      </Grid>
      <Grid item style={{ paddingTop: 100 }}>
        <PlacesList title={listTitle ? listTitle : "Places list"} />
      </Grid>
    </Grid>
  );
};

export default PlacesView;
