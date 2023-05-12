import { headers } from "../../Global";

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
      method: "DELETE"
    })
    .then(r => r.json())
    .then(data => {
      const action = { type: "DELETE_REVIEW", 
      payload: id 
    }
    dispatch(action)
    })
  };
};