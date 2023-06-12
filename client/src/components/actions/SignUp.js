import { headers } from "../../Global";

export const signup = (user) => {
  return (dispatch) => {
    fetch("/signup", {
      method: "POST",
      headers,
      body: JSON.stringify(user),
    })
      .then((r) => r.json())
      .then((user) => {
        const action = {
          type: "LOGIN_USER",
          payload: user,
        };
        dispatch(action);
      });
  };
};
