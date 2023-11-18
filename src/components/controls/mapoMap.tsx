import React from "react";
import { GoogleMap, GoogleMapProps, MarkerF, useLoadScript } from "@react-google-maps/api";
import "./../../App.css";
import { GoogleMapsApiKey, GoogleMapsLibraries, MapCenterGeoCordinates, MapZoomLevel } from "../../models/appConstants";

const MapoMap: React.FC<GoogleMapProps> = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GoogleMapsApiKey,
    libraries: GoogleMapsLibraries,
  });

  return (
    <>
      {!isLoaded ? (
        <>Loading</>
      ) : (
        <div className="App">
          <GoogleMap
            {...props}
            mapContainerClassName="map-container"
            center={MapCenterGeoCordinates}
            zoom={MapZoomLevel}
          >
            <MarkerF position={MapCenterGeoCordinates} />
          </GoogleMap>
        </div>
      )}
    </>
  );
};

export default MapoMap;
