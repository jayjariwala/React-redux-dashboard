import * as actionTypes from "./actionTypes";

export const logUserIn = () => {
  return {
    type: actionTypes.LOGIN_USER
  };
};

export const logOutUser = () => {
  return {
    type: actionTypes.LOGOUT_USER
  };
};
