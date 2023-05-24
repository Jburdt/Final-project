const initialState = {
  reviews: [],
}

const reviewsReducer = (state = initialState, action) => {
  switch(action.type) {
    case "LOAD_REVIEWS":
      return {
        ...state, 
        reviews: action.payload,
      }
    case "DELETE_REVIEW":
      return {
        ...state, 
        reviews: state.reviews.filter(review => review.id !== action.payload)
      }
    default: 
      return state
  };
};

export default reviewsReducer;