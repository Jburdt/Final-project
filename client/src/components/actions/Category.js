export const loadCategories = () => {
 return dispatch => {
  fetch("/categories")
  .then(r => r.json())
  .then(categories => {
    const action = { type: "LOAD_CATEGORIES", payload: categories }
    dispatch(action)
  })
 };
};