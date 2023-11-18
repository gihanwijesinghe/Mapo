import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store/store";
import { PlacesListProps } from "../../models/propTypes";

const PlacesList: React.FC<PlacesListProps> = (props) => {
  const { title } = props;
  const state = useSelector((state: ApplicationState) => state.googlePlaces);

  return (
    <Grid container direction={"column"} spacing={2}>
      <Grid item>{title ? title : "Places list"}</Grid>
      <Grid item container direction={"column"}>
        {state.googleLocations &&
          state.googleLocations.map((item: string, index: number) => <Grid item>{`${index + 1}. ${item}`}</Grid>)}
      </Grid>
    </Grid>
  );
};

export default PlacesList;
