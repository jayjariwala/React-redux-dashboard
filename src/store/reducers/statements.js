import * as actionTypes from "../actions/actionTypes";

const initialState = {
  statements: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_STATEMENTS:
      return { ...state, statements: action.payload.transactions };
    default:
      return state;
  }
};

export default reducer;
