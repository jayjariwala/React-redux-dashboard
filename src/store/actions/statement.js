import * as actionTypes from "./actionTypes";
import axios from "axios";

export const setStatements = statements => {
  return {
    type: actionTypes.SET_STATEMENTS,
    payload: statements
  };
};

export const fetchStatements = () => {
  return dispatch => {
    axios.get("http://localhost:8000/user/transactions").then(response => {
      dispatch(setStatements(response.data));
    });
  };
};
