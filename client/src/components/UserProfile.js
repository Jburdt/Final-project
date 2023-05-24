import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const users = useSelector(store => store.userReducer);
  console.log(users, "userprof")

  return (
    <div>UserProfile
      <ul>
      </ul>
    </div>
  )
}

export default UserProfile;