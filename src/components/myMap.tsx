import React from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import "./../App.css";

const MyMap: React.FC = () => {
  const center = React.useMemo(() => ({ lat: 7.2905715, lng: 80.6337262 }), []);

  return (
    <div className="App">
      <GoogleMap mapContainerClassName="map-container" center={center} zoom={10}>
        <MarkerF position={{ lat: 7.2905715, lng: 80.6337262 }} />
      </GoogleMap>
    </div>
  );
};

export default MyMap;
