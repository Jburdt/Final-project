import React from 'react'
import { useSelector } from 'react-redux';

const Errors = () => {
  const errors = useSelector(store => store.errorsReducer)
  const allErrors = errors.map((error, idx) => <li key={idx}>{ error }</li>)
  console.log(errors)
  return (
    <ul>
      {allErrors}
    </ul>
  )
}

export default Errors;