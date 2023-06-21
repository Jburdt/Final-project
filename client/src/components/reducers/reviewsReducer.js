const initialState = {
  reviews: [],
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_REVIEWS":
      return {
        ...state,
        reviews: action.payload,
      };
    case "DELETE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.filter((review) => review.id !== action.payload),
      };
    case "EDIT_REVIEW":
      return {
        ...state,
        reviews: state.reviews.map((review) =>
          review.id === action.payload.id ? action.payload : review
        ),
      };
    case "ADD_REVIEW":
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
    case "ADD_COMMENT":
      const review = state.reviews.find(
        (review) => review.id === action.payload.review_id
      );
      const updatedComments = [...review.comments, action.payload];
      const updatedReview = { ...review, comments: updatedComments };

      const updatedReviews = state.reviews.map((rev) => {
        if (rev.id === review.id) {
          return updatedReview;
        } else {
          return rev;
        }
      });
      return {
        ...state,
        reviews: updatedReviews,
      };
    default:
      return state;
  }
};

export default reviewsReducer;
