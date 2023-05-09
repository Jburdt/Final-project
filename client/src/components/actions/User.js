export const loadUsers = () => {
  return dispatch => {
    fetch("/users")
    .then(r => r.json())
    .then(users => {
      const action = { type: "LOAD_USERS",
      payload: users}
      dispatch(action)
    })
  }
}; 