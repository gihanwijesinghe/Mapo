import { GridSize } from "@mui/material";
import { Libraries } from "@react-google-maps/api";
import { GeoCordinates } from "./stateTypes";

export const GoogleMapsApiKey = "AIzaSyCXd1VuMwPQbNyTFRBpp-JPgWhikTYyjko";
export const GoogleMapsLibraries: Libraries = ["places"];
export const MapCenterGeoCordinates: GeoCordinates = { lat: 7.2905715, lng: 80.6337262 };
export const MapZoomLevel = 10;
export const GooglePlaceAutoCompleteDebounce = 800;

export const MapViewLeftContent: GridSize = 9;
export const MapViewRightContent: GridSize = 3;
