// Get reviews action
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

// Delete Action 
export const deleteReviews = (id) => {
  return dispatch => {
    fetch(`/reviews/${ id }`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json"
      }
    })
    .then(r => {
      if( r.ok) {
      dispatch({type: "DELETE_REVIEW", payload: id })
      }
    })
  }
};
