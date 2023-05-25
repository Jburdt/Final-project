import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const {users} = useSelector(state => state.userReducer);
  console.log(users, "userprof")

  const names = users.map(user => <li>{user.name}</li>)
  return (
    <div>UserProfile
      <ul>
        {names}
      </ul>
    </div>
  )
}

export default UserProfile;