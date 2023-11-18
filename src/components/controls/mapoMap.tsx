import React from "react";
import { GoogleMap, GoogleMapProps, MarkerF, MarkerProps, useLoadScript } from "@react-google-maps/api";
import "./../../App.css";
import { GoogleMapsApiKey, GoogleMapsLibraries, MapCenterGeoCordinates, MapZoomLevel } from "../../models/appConstants";
import { MapoMapProps } from "../../models/propTypes";

const MapoMap: React.FC<MapoMapProps> = (props) => {
  const { markers, center, zoom } = props;

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
            center={center ? center : MapCenterGeoCordinates}
            zoom={zoom ? zoom : MapZoomLevel}
          >
            {markers &&
              markers.map((marker: MarkerProps) => (
                <MarkerF {...marker} position={marker.position ? marker.position : MapCenterGeoCordinates}></MarkerF>
              ))}
          </GoogleMap>
        </div>
      )}
    </>
  );
};

export default MapoMap;
