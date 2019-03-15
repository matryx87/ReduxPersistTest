import { INCREMENT, DECREMENT, ADD_EMAIL, ADD_PASSWORD } from "./types";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const addEmail = email => {
  return {
    type: ADD_EMAIL,
    payload: email
  };
};

export const addPassword = password => {
  return {
    type: ADD_PASSWORD,
    payload: password
  };
};
