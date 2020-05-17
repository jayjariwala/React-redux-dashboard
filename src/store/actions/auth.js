import * as actionTypes from "./actionTypes";

export const logUserIn = auth => {
  return {
    type: actionTypes.LOGIN_USER,
    payload: auth
  };
};

export const logUserOut = auth => {
  return {
    type: actionTypes.LOGOUT_USER,
    payload: auth
  };
};
