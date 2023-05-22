// import { headers } from "../../Global";

// export const login = (user) => {
//   return dispatch => {
//     fetch("/login", {
//       method: "POST",
//       headers,
//       body: JSON.stringify(user)
//     })
//     .then(r => r.json())
//     .then(user => {
//       const action = { 
//         type: "LOGIN_USER",
//         payload: user
//       }
//       dispatch(action)
//     })
//   };
// }; 