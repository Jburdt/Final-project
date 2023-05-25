const initialState = {
  reviews: [],
  categories: [],
}

const reviewsReducer = (state = initialState, action) => {
  switch(action.type) {
    case "LOAD_REVIEWS":
      return {
        ...state, 
        reviews: action.payload,
        categories: action.payload.map(review => review.category)
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