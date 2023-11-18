export const ADD_LOCATION = "ADD_LOCATION";
export const DELETE_LOCATION = "DELETE_LOCATION";

export type GooglePlacesActionType = typeof ADD_LOCATION | typeof DELETE_LOCATION;

export interface GooglePlacesAction {
  type: GooglePlacesActionType;
  payload: string;
}

const addGoogleLocation = (item: string) => {
  return {
    type: ADD_LOCATION,
    payload: item,
  };
};

const deleteGoogleLocation = () => {
  return {
    type: DELETE_LOCATION,
  };
};

export { addGoogleLocation, deleteGoogleLocation };
