import {
  MapCenterGeoCordinates,
  MapViewLeftContent,
  MapViewRightContent,
  MapZoomLevel,
} from "../../models/appConstants";
import MapView from "../maps/mapView";

const HomeView: React.FC = () => {
  return (
    <MapView
      center={MapCenterGeoCordinates}
      zoom={MapZoomLevel}
      leftGridSize={MapViewLeftContent}
      rightGridSize={MapViewRightContent}
    />
  );
};

export default HomeView;
