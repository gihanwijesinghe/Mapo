import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import MyReducer from "./myReducer";

const rootReducer = combineReducers({
  myReducer: MyReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));

export default store;
