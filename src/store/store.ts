import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import GooglePlacesReducer from "./reducers/googlePlacesReducer";

const rootReducer = combineReducers({
  googlePlaces: GooglePlacesReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));

export type ApplicationState = ReturnType<typeof rootReducer>;

export default store;
