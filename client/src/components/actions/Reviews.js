import { headers } from "../../Global";
import { setErrors } from "./Errors";

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
      if(r.ok) {
      dispatch({type: "DELETE_REVIEW", payload: id })
      }
    })
  }
};

// EDIT ACTION
export const editReviews = (id, formData, navigate) => {
  return dispatch => {
    fetch(`/reviews/${id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json())
      .then(data => {
        const action = {
          type: "EDIT_REVIEW",
          payload: data
        }
        dispatch(action);
        navigate('/reviews')
      })
  }
}

// ADD REVIEW
export const addReview = (formData, navigate) => {
  return dispatch => {
    fetch('/reviews', {
      method: "POST",
      headers,
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => {
      const action = {
        type: "ADD_REVIEW",
        payload: data
      }
      dispatch(action)
      navigate('/reviews')
    })
  }
};

// ADD COMMENT
export const addComment = (review_id, comment, setErrors) => {
  debugger
  console.log(comment)
  return dispatch => {
    fetch('/comments', {
      method: "POST",
      headers,
      body: JSON.stringify(comment)
    })
    .then(r => r.json())
    .then(data => {
      if (data.error) {
        dispatch(setErrors(data.error))
      } else {
        const action = {
        type: "ADD_COMMENT",
        payload: data
      }
      dispatch(action)
      // navigate('/reviews')
      }
    })
  }
};