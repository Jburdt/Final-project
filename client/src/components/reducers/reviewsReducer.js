import React from 'react';

const reviewsReducer = (state = [], action) => {
  switch(action.type) {
    case "LOAD_REVIEWS":
    return action.payload
    default: 
    return state
  };
};

export default reviewsReducer;