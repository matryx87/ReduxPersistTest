import {
  INCREMENT,
  DECREMENT,
  ADD_EMAIL,
  ADD_PASSWORD
} from "../actions/types.js";

import initialState from "../initialState.js";

export const pippoReducer = (state = initialState.pippo, action) => {
  switch (action.type) {
    case INCREMENT:
    //   return { ...state, pippo: state.pippo + 1 };
    return state + 1

    case DECREMENT:
    //   return { ...state, pippo: state.pippo - 1 };
      return state - 1

    default:
      return state;
  }
};

export const loginReducer = (state = initialState.login, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ADD_EMAIL:
    //   const mailLogin = newState.login;
    //   mailLogin.email = action.payload;

    //   newState.login = mailLogin;
    //   return newState;
      return { ...state, email: action.payload };


    case ADD_PASSWORD:
    //   const passwordLogin = { ...state.login };
    //   passwordLogin.password = action.payload;

    //   newState.login = { ...passwordLogin };
    //   return newState;
      return { ...state, password: action.payload };


    default:
      return state;
  }
};