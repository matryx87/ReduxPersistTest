// import {
//   INCREMENT,
//   DECREMENT,
//   ADD_EMAIL,
//   ADD_PASSWORD
// } from "../actions/types.js";

// import initialState from "../initialState.js";

// const pippoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, pippo: state.pippo + 1 };

//     case DECREMENT:
//       return { ...state, pippo: state.pippo - 1 };

//     case ADD_EMAIL:
//       const newMailState = { ...state };

//       const mailLogin = { ...state.login };
//       mailLogin.email = action.payload;

//       newMailState.login = { ...mailLogin };
//       return newMailState;

//     case ADD_PASSWORD:
//       const newPasswordState = { ...state };

//       const passwordLogin = { ...state.login };
//       passwordLogin.password = action.payload;

//       newPasswordState.login = { ...passwordLogin };
//       return newPasswordState;

//     default:
//       return state;
//   }
// };

// export default pippoReducer;
