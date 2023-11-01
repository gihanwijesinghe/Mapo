import { useLoadScript } from "@react-google-maps/api";
import "./App.css";
import MyMap from "./components/myMap";
import { Grid } from "@mui/material";
import MyPlaces from "./components/myPlaces";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCXd1VuMwPQbNyTFRBpp-JPgWhikTYyjko",
    libraries: ["places"],
  });
  return (
    <Provider store={store}>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <Grid container>
          <Grid item xs={9}>
            <MyMap></MyMap>
          </Grid>
          <Grid item xs={3}>
            <MyPlaces></MyPlaces>
          </Grid>
        </Grid>
      )}
    </Provider>
  );
};

export default App;
