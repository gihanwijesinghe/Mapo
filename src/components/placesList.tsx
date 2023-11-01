import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const PlacesList: React.FC = () => {
  const state = useSelector((state: any) => state.myReducer);
  return (
    <Grid container direction={"column"} spacing={2}>
      <Grid item>Places list</Grid>
      <Grid item container direction={"column"}>
        {state.items.map((item: string, index: number) => (
          <Grid item>{`${index + 1}. ${item}`}</Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default PlacesList;
