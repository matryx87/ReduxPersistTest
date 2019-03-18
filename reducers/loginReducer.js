// import { ADD_EMAIL, ADD_PASSWORD } from "../actions/types.js";
// import initialState from "../initialState.js";

// const loginReducer = (state = initialState, action) => {
//   const newState = { ...state };

//   switch (action.type) {
//     case ADD_EMAIL:
//       const mailLogin = newState.login;
//       mailLogin.email = action.payload;

//       newState.login = mailLogin;
//       return newState;

//     case ADD_PASSWORD:
//       const passwordLogin = { ...state.login };
//       passwordLogin.password = action.payload;

//       newState.login = { ...passwordLogin };
//       return newState;

//     default:
//       return state;
//   }
// };

// export default loginReducer;
