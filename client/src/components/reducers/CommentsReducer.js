const initialState = {
  comments: [],
}

const commentsReducer = (state = initialState, action) => {
  switch(action.type) {
    case "LOAD_COMMENTS":
      return action.payload
      default: 
        return state
  };
};

export default commentsReducer;