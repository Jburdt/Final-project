export const loadComments = () => {
  return dispatch => {
    fetch("/comments")
    .then(r => r.json())
    .then(comments => {
      const action = { 
        type: "LOAD_COMMENTS",
        payload: comments
      }
      dispatch(action)
    })
  }
}; 