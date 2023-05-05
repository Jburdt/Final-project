export const loadReviews = () => {

  return dispatch => {
    fetch("/reviews")
    .then((r) => r.json())
    .then(reviews => {
    const action = { type: "LOAD_REVIEWS", payload: reviews }
    dispatch(action)
    })
  };
  
};