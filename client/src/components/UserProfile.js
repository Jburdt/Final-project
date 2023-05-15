import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const currentUser = useSelector(state => state.userReducer);
  console.log(currentUser)

  return (
    <div>UserProfile
      {currentUser.map((user) => {
        return <h1>{user.name}</h1>
      })}
      
    </div>
  )
}

export default UserProfile;