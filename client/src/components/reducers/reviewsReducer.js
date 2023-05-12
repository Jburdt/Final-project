const reviewsReducer = (state = [], action) => {
  // console.log(state)

  switch(action.type) {

    case "LOAD_REVIEWS":
      return action.payload

    case "DELETE_REVIEW":
      return state.filter(review => review.id !== action.payload)
      
    default: 
      return state
  };
};

export default reviewsReducer;