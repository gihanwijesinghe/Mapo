import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./../App.css";

const MyMap: React.FC = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBm8mlC5L4JQh5lWJrEfcE2uzEkk-wKI5s",
  });
  const center = React.useMemo(() => ({ lat: 7.2905715, lng: 80.6337262 }), []);

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap mapContainerClassName="map-container" center={center} zoom={10}>
          <MarkerF position={{ lat: 7.2905715, lng: 80.6337262 }} />
        </GoogleMap>
      )}
    </div>
  );
};

export default MyMap;
