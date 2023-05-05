export const loadReviews = () => {
  return dispatch => {
    fetch("http://localhost:3000/reviews")
    .then((r) => r.json())
    .then((reviews) => console.log(reviews))
    // .then((reviews) => dispatch({ type: "LOAD_REVIEWS", payload: reviews }))
  }
};