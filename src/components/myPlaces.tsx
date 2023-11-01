import { Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { addItem } from "../store/myAction";
import MyAutoComplete from "./myAutoComplete";
import PlacesList from "./placesList";

const MyPlaces: React.FC = () => {
  const dispatch: ThunkDispatch<any, any, any> = useDispatch();
  const onAddressSelect = (address: string) => {
    dispatch(addItem(address));
  };
  return (
    <Grid container direction={"column"} style={{ padding: 10 }} spacing={2}>
      <Grid item>
        <MyAutoComplete onAddressSelect={onAddressSelect}></MyAutoComplete>
      </Grid>
      <Grid item style={{ paddingTop: 100 }}>
        <PlacesList />
      </Grid>
    </Grid>
  );
};

export default MyPlaces;
