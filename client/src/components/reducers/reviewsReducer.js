const initialState = {
  reviews: [],
};

const reviewsReducer = (state = initialState, action) => {
  console.log("initialState", initialState);
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
      debugger;
      const review = state.reviews.find(
        (review) => review.id === action.payload.review_id
      );
      const updatedComments = [...review.comments, action.payload];
      const updatedReview = { ...review, comments: updatedComments };
      const addedCommentsToReviews = state.map((rev) => {
        if (rev === review.id) {
          return updatedReview;
        } else {
          return rev;
        }
      });
      return addedCommentsToReviews;
    default:
      return state;
  }
};

export default reviewsReducer;
