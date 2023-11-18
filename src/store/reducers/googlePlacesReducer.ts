import { GooglePlacesState } from "../../models/stateTypes";
import { ADD_LOCATION, DELETE_LOCATION, GooglePlacesAction } from "../actions/googlePlacesActions";

const initialState: GooglePlacesState = {
  googleLocations: [],
};

const GooglePlacesReducer = (state = initialState, action: GooglePlacesAction) => {
  switch (action.type) {
    case ADD_LOCATION:
      return {
        ...state,
        googleLocations: [...state.googleLocations, action.payload],
      };
    case DELETE_LOCATION:
      return {
        ...state,
        googleLocations: state.googleLocations.filter((l) => l !== action.payload),
      };
    default:
      return state;
  }
};

export default GooglePlacesReducer;
