import * as actionTypes from "../actions/actionTypes";

const initialState = {
  login: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      console.log("A user wants to login");
      return state;
    default:
      return state;
  }
};

export default reducer;
