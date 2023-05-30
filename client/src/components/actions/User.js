import { headers } from "../../Global";
import { clearErrors, setErrors } from "./Errors";

export const loadUsers = () => {
  return dispatch => {
    fetch("/users")
    .then(r => r.json())
    .then(users => {
      const action = { 
        type: "LOAD_USERS",
        payload: users
      }
      dispatch(action)
    })
  }
}; 

export const loadCurrentUser = () => {
  return dispatch => {
    fetch('/me')
      .then(resp => resp.json())
      .then(data => {
        if(!data.errors) {
          const action = {
            type: "LOGIN_USER",
            payload: data
          }
          dispatch(action);
        } 
      })
  }
}

export const login = (user, navigate) => {
  return dispatch => {
    fetch("/login", {
      method: "POST",
      headers,
      body: JSON.stringify(user)
    })
    .then(r => r.json())
    .then(data => {
      if(data.errors) {
        dispatch(setErrors(data.errors))
      } else {
        const action = {
          type: "LOGIN_USER",
          payload: data
        }
        dispatch(action)
        dispatch(clearErrors())
        navigate("/reviews")
      }
    })
  };
}; 

export const logout = () => {
  return {
    type: "LOGOUT_USER"
  }
};

export const signupUser = (user, navigate) => {
  return dispatch => {
    fetch("/signup", {
      method: "POST",
      headers,
      body: JSON.stringify(user)
    })
      .then(resp => resp.json())
      .then(data => {
        if(data.errors) {
          dispatch(setErrors(data.errors));
        } else {
          dispatch({
            type: "LOGIN_USER",
            payload: data
          })
          dispatch({
            type: "ADD_USER",
            payload: data
          })
          navigate("/reviews")
        }
      })
  }
}