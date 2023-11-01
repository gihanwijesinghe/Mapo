import { ADD_ITEM, DELETE_ITEM } from "./myAction";

export interface ReduxAction {
  type: string;
  payload: string;
}

const initialState = {
  items: [],
};

const MyReducer = (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

export default MyReducer;
