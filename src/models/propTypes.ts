import { GridSize } from "@mui/material";
import { GoogleMapProps, MarkerProps } from "@react-google-maps/api";
import { GeoCordinates } from "./stateTypes";

export interface MapoAutoCompleteProps {
  lable: string;
  onItemSelect: (selection: any) => void;
}

export interface MapViewProps extends GoogleMapProps {
  leftGridSize?: GridSize;
  rightGridSize?: GridSize;
  center?: GeoCordinates;
  zoom?: number;
}

export interface PlacesListProps {
  title?: string;
}

export interface MapoMapProps extends GoogleMapProps {
  markers?: MarkerProps[];
}

export interface PlacesViewProps {
  searchTitle?: string;
  listTitle?: string;
  onPlaceSelect?: (selection: any) => void;
}
