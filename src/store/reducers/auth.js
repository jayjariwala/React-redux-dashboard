import * as actionTypes from "../actions/actionTypes";

const initialState = {
  login: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return { login: action.payload };
    case actionTypes.LOGOUT_USER:
      return { login: action.payload };
    default:
      return state;
  }
};

export default reducer;
