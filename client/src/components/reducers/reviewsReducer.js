const initialState = {
  reviews: [],
  comments: [],
}

const reviewsReducer = (state = initialState, action) => {
  // console.log(state)

  switch(action.type) {

    case "LOAD_REVIEWS":
      return {
        ...state, 
        reviews: action.payload,
        comments: action.payload,
      }

    case "DELETE_REVIEW":
      return state.filter(review => review.id !== action.payload)
      
    default: 
      return state
  };
};

export default reviewsReducer;