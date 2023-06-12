import { headers } from "../../Global";
import { clearErrors, setErrors } from "./Errors";

// Get reviews action
export const loadReviews = () => {
  return (dispatch) => {
    fetch("/reviews")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        const action = { type: "LOAD_REVIEWS", payload: data };
        dispatch(action);
      });
  };
};

// Delete Action
export const deleteReviews = (id) => {
  return (dispatch) => {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        dispatch({ type: "DELETE_REVIEW", payload: id });
      }
    });
  };
};

// EDIT ACTION
export const editReviews = (id, formData, navigate) => {
  return (dispatch) => {
    fetch(`/reviews/${id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.errors) {
          dispatch(setErrors(data.errors));
          console.log(data.errors);
        } else {
          const action = {
            type: "EDIT_REVIEW",
            payload: data,
          };
          dispatch(action);
          dispatch(clearErrors());
          navigate("/reviews");
        }
      });
  };
};

// ADD REVIEW
export const addReview = (formData, navigate) => {
  return (dispatch) => {
    fetch("/reviews", {
      method: "POST",
      headers,
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        const action = {
          type: "ADD_REVIEW",
          payload: data,
        };
        dispatch(action);
        navigate("/reviews");
      });
  };
};

// ADD COMMENT
export const addComment = (review_id, comment, setErrors) => {
  return (dispatch) => {
    fetch("/comments", {
      method: "POST",
      headers,
      body: JSON.stringify({ comment, review_id }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          const action = {
            type: "ADD_COMMENT",
            payload: data,
          };
          dispatch(action);
        }
      });
  };
};
