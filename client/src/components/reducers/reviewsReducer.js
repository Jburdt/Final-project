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
    case "EDIT_REVIEW":
      return {
        ...state,
        reviews: state.reviews.map(review => review.id === action.payload.id ? action.payload : review)
      }
    default: 
      return state
  };
};

export default reviewsReducer;