const initialState = {
  currentUser: null,
  loggedIn: false,
  users: []
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {

    case "LOAD_USERS":
      return action.payload

    case "LOGIN_USER":
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: true,
      }

      default: 
        return state
  };
};

export default userReducer;